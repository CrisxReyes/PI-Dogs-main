import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';

function App() {
  return (
      <Switch>
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/home/:id'} component={DogDetail}/>
      </Switch>
  );
}

export default App;
