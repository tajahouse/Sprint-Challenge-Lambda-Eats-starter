import React from 'react';
import { useHistory } from "react-router-dom";

const HomePage = () =>{
    const history = useHistory();
    const pizzaPage = e =>{
        history.push("/pizza");
    }
    return(
    <div className="homepage-wrapper">
        <h1>Pizza Anyone?</h1>
    <p>Come choose from your favorite pizza, delivered to you while you code!</p>
    <button className="pizza-button" onClick={pizzaPage}>Pizza?</button>
    </div>
    )
}

export default HomePage;