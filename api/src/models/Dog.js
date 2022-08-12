const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  heightMin: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  heightMax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weightMin: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  weightMax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearsOfLifeMin: {
    type: DataTypes.STRING,
  },
  yearsOfLifeMax: {
    type: DataTypes.STRING,
  },
  createdByUser: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }}, {
    timestamps: false
  }
  );
};
