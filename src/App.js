import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import Beer from './components/Beer';

function App() {

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/random-beers" component={Beer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
