const MapCategories = ({ categories, handleClick }) => (
  categories.map((category) => (
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
);

export default MapCategories;
