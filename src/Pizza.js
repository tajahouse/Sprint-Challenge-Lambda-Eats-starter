import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    pizzaSize: yup.string(),
    sauce: yup.string(),
    chicken: yup.boolean().oneOf([true, false]),
    beef: yup.boolean().oneOf([true, false]),
    cheese: yup.boolean().oneOf([true, false]),
    spinach: yup.boolean().oneOf([true, false]),
    special: yup.string(),
    name: yup.string().min(2, "Name has to be a minimum of 2 characters").required()
})

const Pizza = () =>{
    const [buttonDisabled, setButtonDisabled]= useState(true);

    const [pizza, setPizza] = useState({
        pizzaSize: "",
        sauce:"",
        chicken:"",
        beef:"",
        cheese:"",
        spinach:"",
        special:"",
        name:""
    })

    const [error, setError]= useState({
        pizzaSize: "",
        sauce:"",
        chicken:"",
        beef:"",
        cheese:"",
        spinach:"",
        special:"",
        name:""
    })

    const [post, setPost] = useState([])

    useEffect(() => {
        formSchema.isValid(pizza).then(valid =>{
            setButtonDisabled(!valid);
        })
    },[pizza])

    const Order = e => {
        e.preventDefault();
    axios.post("https://reqres.in/api/users", pizza).then(res => {
        setPost(res.data);

        setPizza({
            pizzaSize: "",
            sauce:"",
            chicken:"",
            beef:"",
            cheese:"",
            spinach:"",
            special:"",
            name:"" 
        })

    })
        .catch(err => console.log(err.res));
    };

    const validateChange = e => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setError({
              ...error,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setError({
              ...error,
              [e.target.name]: err.error
            });
          });
      };

    const inputChange = e =>{
        e.persist();
        const newFormData = {
            ...pizza, 
            [e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setPizza(newFormData);
    }
    return(
        <>
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={Order}>
            <label htmlFor="pizzaSize" name="pizzaSize">
                Choose your size
                <select id="pizzaSize" name="pizzaSize" onChange={inputChange} data-cy="pizzaSize">
                    <option value="medium">Medium 12"</option>
                    <option value="large">Large 16"</option>
                    <option value="giant">Giant 20"</option>
                </select>
            </label>

            <label htmlFor="sauce" name="sauce">
                Choose your sauce
                <select id="sauce" name="sauce" onChange={inputChange} data-cy="sauce">
                    <option value="original">Original Red</option>
                    <option value="garlic">Garlic Ranch</option>
                    <option value="bbq">BBQ Sauce</option>
                    <option value="alfredo">Alfredo Sauce</option>
                </select>
            </label>

            <label htmlFor="chicken" >
                Choose your Toppings
            <input

                id="chicken"            
                type="checkbox"
                name="chicken"
                checked={pizza.chicken}
                onChange={inputChange}
                data-cy="chicken"
            />
            </label>

            Chicken
            <label htmlFor="beef">
            <input

                id="beef"            
                type="checkbox"
                name="beef"
                checked={pizza.beef}
                onChange={inputChange}
                data-cy="beef"
            />
            Beef
            </label>
            <label htmlFor="cheese">

            <input
                id="chesse" 
                type="checkbox"
                name="cheese"
                checked={pizza.cheese}
                onChange={inputChange}
                data-cy="cheese"
            />
            Cheese
            </label>
            <label htmlFor="spinach">  

            <input
                id="spinach" 
                type="checkbox"
                name="spinach"
                checked={pizza.spinach}
                onChange={inputChange}
                data-cy="spinach"
            />
            Spinach
            </label>



            <label htmlFor="special">
                Any special instructions?
                <textarea id="special" name="special" value={pizza.special} onChange={inputChange} data-cy="special" />
            </label>

            <label htmlFor="name">
                Name
                <input name="name" id="name" placeholder="Enter Your Name Here" value={pizza.name} onChange={inputChange} data-cy="name"/>               
            </label> 
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button type="submit" data-cy="button" >Order</button>
        </form>

        </>
    )
}

export default Pizza;