const { Router } = require('express');
const axios = require("axios");
const {Dog, Temperament} = require('../db.js');
const { routes } = require('../app.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const { API_KEY } = process.env;
const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//FUNCION PARA TRAER LOS DATOS DE LA API Y LA DB
async function infoDogs() {
    const response = await axios.get(linkApi);
        const cleanAPI = response.data.map(dog => {
            return {id: dog.id,
                    image: dog.image, 
                    name: dog.name, 
                    temperament: dog.temperament, 
                    weight: dog.weight.metric,
                    height: dog.height.metric,
                    life_span: dog.life_span};
        })
        const responseDB = await Dog.findAll( {include: Temperament} ); 
        const cleanDB = responseDB.map(dog => {
            return {id: dog.id,
                    name: dog.name, 
                    temperament: dog.temperaments.map(t => t.name).join(', '), 
                    weight: `${dog.weightMin} -  ${dog.weightMax}`,
                    height: `${dog.heightMin} -  ${dog.heightMax}`,
                    life_span: `${dog.yearsOfLifeMin} -  ${dog.yearsOfLifeMax} years`};
        })
        const dogs = cleanAPI.concat(cleanDB);
        return dogs;
};
 //LLAMADO DE TODAS LAS RAZAS Y BUSQUEDA POR NOMBRE
router.get('/dogs', async(req, res) => {
    try{
        const dogs = await infoDogs();
        const name = req.query.name;

        if(name){
            const findName = await dogs.filter(dog => {
                return dog.name.toLowerCase().includes(name.toLowerCase());
            });
            if(findName.length > 0){
                res.json(findName);
            }else{
                res.status(404).json({error: "Dog not found"});
            }
        }
        else{
            res.json(dogs);
        }
    }catch(err){
        res.status(404).json({error: "Dogs not found"});
    }
});
//BUSQUEDA POR ID 
router.get('/dogs/:idRaza', async(req, res) => {
    const id = req.params.idRaza;
    const dogs = await infoDogs();
    const findId = await dogs.filter(dog => {
        return dog.id === parseInt(id);
    } );

        if (findId.length > 0) {
            res.json(findId);
        } else {
            res.status(404).json({ error: "Id not found" });
        }
});
//TRAE TODOS LOS TEMPERAMENTOS DE LA API Y LOS GUARDA EN LA DB
router.get('/temperaments', async (req, res) => {
    try{
        const response = await axios.get(linkApi);
        const temperaments = [];
        response.data.forEach((dog) => {
            if(typeof dog.temperament === 'string') {
                dog.temperament.split(', ').map((temperament) => {
                    if(!temperaments.includes(temperament)){
                        temperaments.push(temperament);
                    }
                })
            }
        })
        temperaments.forEach(async function(temperament) {
            await Temperament.findOrCreate({where:{name: temperament}});
        })
        const allTemperament = await Temperament.findAll();
        res.json(allTemperament);
    }catch(err) {
        res.status(404).json({ error: 'Temperaments not Found' });
    }
});
//CREA UNA NUEVA RAZA EN LA DB 
router.post('/dogs', async(req, res) => {
    const dog_Temperaments = req.body.temperaments; //arreglo con id's de temperamentos

    await Dog.create({
        name: req.body.name,
        heightMax: req.body.heightMax,
        heightMin: req.body.heightMin,
        weightMin: req.body.weightMin,
        weightMax: req.body.weightMax,
        yearsOfLifeMin: req.body.yearsOfLifeMin,
        yearsOfLifeMax: req.body.yearsOfLifeMax,
    })
    .then(async (dog) => {
        for(let i=0; i<dog_Temperaments.length; i++) {
            await dog.addTemperament(dog_Temperaments[i]); //se asocian los temperamentos con el perro
        }
        res.status(200).send(dog);
    })
});
module.exports = router;
