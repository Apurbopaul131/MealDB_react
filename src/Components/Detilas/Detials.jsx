/* eslint-disable no-unused-vars */
import React from 'react';
import "./Detials.css";
import { useLoaderData } from 'react-router-dom';
import Mealcard from '../Mealcard/Mealcard';

const Detials = () => {
    const mealDetials = useLoaderData();
    const {meals} = mealDetials;
    console.log(meals);
    return (
        <div className='detials-container'>
            {
                meals.map((meal)=><Mealcard key={meal.idMeal} meal={meal}></Mealcard>)
            }
        </div>
    );
};

export default Detials;