import PropTypes from 'prop-types';

const Categories = ({ categories, handleClick }) => (
  <>
    <h1 className="titles">Categories</h1>
    <div className="flex categories-container">
      {
                categories !== undefined
                  ? categories.map((category) => (
                    <button type="button" onClick={() => handleClick(category.strCategory)} key={category.idCategory} className="cat-item">
                      <div className="category">
                        <img src={category.strCategoryThumb} alt="Category" />
                        <div className="cat-name tooltip">
                          {category.strCategory}
                          <span className="category-desc tooltiptext">{category.strCategoryDescription}</span>
                        </div>
                      </div>
                    </button>
                  ))
                  : <h2>Loading...</h2>

                }
    </div>
  </>
);

export default Categories;

Categories.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
};
