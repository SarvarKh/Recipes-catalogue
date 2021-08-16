const Categories = ({categories, handleClick}) => {
    return (
        <>
            <h1>Categories</h1>
            <div className="flex categories-container">
                {
                categories !== undefined ?
                    categories.map(category => (
                    <a onClick={() => handleClick(category.strCategory)} key={category.idCategory}>  
                        <div className="category">
                        <img src={category.strCategoryThumb} />
                        {category.strCategory}
                        <p className="category-desc">{category.strCategoryDescription}</p>
                        </div>
                    </a>
                    ))
                : <h2>Loading...</h2>
                
                }
            </div>
        </>
    )
}

export default Categories;