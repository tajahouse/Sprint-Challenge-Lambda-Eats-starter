import React from "react";
import HomePage from './HomePage';
import Pizza from "./Pizza";
import { Route, Link, Switch } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <div className="App">
    <nav>
      <h1 className="leHeader">Lambda Eats</h1>
      <div className="nav-links">
        <Link  to="/">
          <button className="homelink">Home</button></Link>
        <Link to="/pizza">
           <button className="homelink">Menu</button></Link>
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
