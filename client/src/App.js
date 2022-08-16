import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={'/home'} component={NavBar}/>
    </React.Fragment>
  );
}

export default App;
