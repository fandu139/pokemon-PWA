import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SpalahScreen from "./home/splashScreen";
import Home from "./home";
import DetailPokemon from "./home/detailPokemon";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SpalahScreen />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <DetailPokemon />
        </Route>
      </Switch>
    </Router>
  );
}