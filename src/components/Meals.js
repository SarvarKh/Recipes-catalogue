import { Link } from "react-router-dom";

const Meals = ({meals, clickOnDetailMeal}) => {
    return (
        <>
            <h1 className="titles t-meal">Meals</h1>
            <div className="flex meal-container">
                {
                meals !== undefined ?
                    meals.map(meal => (
                    <Link to="./components/DetailMeal" key={meal.idMeal} className="meal" onClick={() => clickOnDetailMeal(meal.idMeal)}>
                        <div className="img-container">
                            <img src={meal.strMealThumb} />
                        </div>
                        <h3>{meal.strMeal}</h3>
                    </Link>
                    ))
                : <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Meals;
