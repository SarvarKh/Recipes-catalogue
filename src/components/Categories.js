const Categories = ({ categories, handleClick }) => (
  <>
    <h1 className="titles">Categories</h1>
    <div className="flex categories-container">
      {
                categories !== undefined
                  ? categories.map((category) => (
                    <a onClick={() => handleClick(category.strCategory)} key={category.idCategory} className="cat-item">
                      <div className="category">
                        <img src={category.strCategoryThumb} />
                        <div className="cat-name tooltip">
                          {category.strCategory}
                          <span className="category-desc tooltiptext">{category.strCategoryDescription}</span>
                        </div>
                      </div>
                    </a>
                  ))
                  : <h2>Loading...</h2>

                }
    </div>
  </>
);

export default Categories;
