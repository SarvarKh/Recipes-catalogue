const Meals = ({meals}) => {
    return (
        <>
            <h1>Meals</h1>
            <div className="flex meal-container">
                {
                meals !== undefined ?
                    meals.map(meal => (
                    <div key={meal.idMeal} className="meal">
                        <h3>{meal.strMeal}</h3>
                        <div className="img-container">
                        <img src={meal.strMealThumb} />
                        </div>
                    </div>
                    ))
                : <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Meals;
