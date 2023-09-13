/* eslint-disable no-unused-vars */
import React from 'react';
import "./Itemsearch.css";
import { useLoaderData } from 'react-router-dom';
import "../Home/Home";
import Mealcard from '../Mealcard/Mealcard';
const Itemsearch = () => {
    const singleMeal = useLoaderData();
    console.log(singleMeal);
    const {meals} = singleMeal;
    return (
        <div className='card-container'>
            {
                meals.map((meal)=><Mealcard key={meal.idMeal} meal={meal}></Mealcard>)
            }
        </div>
    );
};

export default Itemsearch;