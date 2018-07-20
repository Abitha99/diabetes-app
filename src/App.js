import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import DiabetesHomePage from "./components/pages/DiabetesHomePage";

export const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={DiabetesHomePage} />
    <Route exact path="/mellitus" component={DiabetesHomePage} />
    <Route exact path="/insipidus" component={DiabetesHomePage} />
    <Route exact path="/mellitus/eye" component={DiabetesHomePage} />
    <Route exact path="/mellitus/cardiac" component={DiabetesHomePage} />
    <Route exact path="/mellitus/kidney" component={DiabetesHomePage} />
  </div>
);

export default App;
