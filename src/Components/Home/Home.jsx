import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Mealcard from "../Mealcard/Mealcard";

const Home = () => {
    const mealData = useLoaderData();
    const {meals} = mealData;
    return (
        <div className="card-container">
            {
                meals.map((meal)=><Mealcard key={meal.idMeal} meal={meal}></Mealcard>)
            }
        </div>
    );
};

export default Home;