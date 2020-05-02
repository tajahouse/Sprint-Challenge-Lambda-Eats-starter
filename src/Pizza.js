import React, { useState, useEffect } from "react";
import * as yup from "yup";

const Pizza = () =>{
    const [buttonDisabled, setButtonDisabled]= useState(true);

    const [pizza, setPizza] = useState({
        pizzaSize: "",
        sauce:"",
        toppings:"",
        special:"",
        name:""
    })

    const [err, setErr]= useState({
        pizzaSize: "",
        sauce:"",
        toppings:"",
        special:"",
        name:""
    })
    const inputChange = e =>{
        e.persist();
        const newFormData = {
            ...pizza, 
            [e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
    }
    return(
        <>
        <h2>Build Your Own Pizza</h2>
        <form>
            <label htmlFor="pizzaSize" name="pizzaSize">
                Choose your size
                <select id="pizza-size">
                    <option value="medium">Medium 12"</option>
                    <option value="large">Large 16"</option>
                    <option value="giant">Giant 20"</option>
                </select>
            </label>

            <label htmlFor="sauce" name="sauce">
                <select id="sauce">
                    <option value="original">Original Red</option>
                    <option value="garlic">Garlic Ranch</option>
                    <option value="bbq">BBQ Sauce</option>
                    <option value="alfredo">Alfredo Sauce</option>
                </select>
            </label>

            <label htmlFor="toppings">
                Choose your Toppings
            <input
            
                type="checkbox"
                name="toppings"
                checked={pizza.toppings}
                onChange={inputChange}
                />
                Chicken

                <input
            
            type="checkbox"
            name="toppings"
            checked={pizza.toppings}
            onChange={inputChange}
            />
            Beef

            <input
            
            type="checkbox"
            name="toppings"
            checked={pizza.toppings}
            onChange={inputChange}
            />
            Cheese

            <input
            
            type="checkbox"
            name="toppings"
            checked={pizza.toppings}
            onChange={inputChange}
            />
            Spinach
            </label>

            <label htmlFor="special">
                Any special instructions?
                <textarea id="special" name="special" value={pizza.special} onChange={inputChange} />
            </label>

            <label htmlFor="name">
                Name
                <input name="name" id="name" placeholder="Enter Your Name Here" />               
            </label> 

            <button disabled={buttonDisabled}>Order</button>
        </form>

        </>
    )
}

export default Pizza;