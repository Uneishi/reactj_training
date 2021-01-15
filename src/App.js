import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./pages";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/home" component ={MainPage}/>
      <Route exact path="/contact" component ={Contact}/>
      <Route path="/404" component={NotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;
