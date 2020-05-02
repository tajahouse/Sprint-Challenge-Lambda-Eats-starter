import React from "react";
import HomePage from './HomePage';
import Pizza from "./Pizza";
import { Route, Link, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <nav>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza Menu</Link>
      </div>
     </nav>
     <Switch>
       <Route path="/pizza" component={Pizza} />

       <Route exact path="/" component={HomePage} />
     </Switch>
     </div>
  );
};
export default App;
