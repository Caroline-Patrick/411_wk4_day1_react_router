import React from 'react'
import cars from '../cars.json';
import {useParams} from "react-router-dom";
// Import {useParams} from "react-router-dom" here //

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {id} = useParams();
    // params are what id is passed in - we can name the id object whatever we want in the router file
  
    const car = cars.find(car=> car.id === +id);
    //+ sign in front of id -> forces string into number - could parse

    console.log(car)
    return (
       <li>
        <h2>{car.Name}</h2>
        <p>{car.Miles_per_Gallon}</p>
    </li> 
    )
}

export default Car