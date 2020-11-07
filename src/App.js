import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/randomBeers" component={RandomBeer} />
        <Route exact path="/newBeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
