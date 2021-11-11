import "./App.css";
import React from 'react';
import { BrowserRouter, Route,Switch, Router } from "react-router-dom";
import Characterlist from './components/charactersList/characterList';
import Character from "./components/character/character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
              <Route path="/:id" component={Character} />
              <Route path="/" component={Characterlist} />
            </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;

