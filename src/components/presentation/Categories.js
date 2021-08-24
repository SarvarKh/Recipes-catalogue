import PropTypes from 'prop-types';
import MapCategories from '../container/MapCategories';

const Categories = ({ handleClick }) => (
  <>
    <h1 className="titles">Categories</h1>
    <div className="flex categories-container">
      <MapCategories handleClick={handleClick} />
    </div>
  </>
);

export default Categories;

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
