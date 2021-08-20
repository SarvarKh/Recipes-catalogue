import PropTypes from 'prop-types';
import MapCategories from './MapCategories';

const Categories = ({ categories, handleClick }) => (
  <>
    <h1 className="titles">Categories</h1>
    <div className="flex categories-container">
      {
        categories !== undefined
          ? <MapCategories categories={categories} handleClick={handleClick} />
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
