import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ContactoPage from './pages/ContactoPage';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import SeccionesPage from './pages/SeccionesPage';


function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portafolio" exact component={SeccionesPage}/>
        <Route path="/contacto" exact component={ContactoPage}/>
        <Route path="/portafolio/:id" exact component={PortfolioPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
