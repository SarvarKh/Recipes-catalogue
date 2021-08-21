import PropTypes from 'prop-types';
import Table from './Table';

const MapDetailMeal = ({ detailMeal }) => (
  <div className="detail-con">
    <h1>{detailMeal.strMeal}</h1>
    <div className="detail-main flex">
      <div className="d-img">
        <iframe src={`https://www.youtube.com/embed/${detailMeal.strYoutube.split('=')[1]}`} title={detailMeal.strCategory} />
        <img src={detailMeal.strMealThumb} alt="Meal" />
      </div>
      <div className="instructions">
        <h2>How to prepare?</h2>
        <p>{detailMeal.strInstructions}</p>
        <div className="d-paragraph">
          <span className="d-title">Category:</span>
          {' '}
          {detailMeal.strCategory}
        </div>
        <div className="d-paragraph">
          <span className="d-title">Origin:</span>
          {' '}
          {detailMeal.strArea}
        </div>
        <div className="d-paragraph">
          <span className="d-title">#Tags:</span>
          {' '}
          {detailMeal.strTags}
        </div>
        <div className="d-paragraph">
          <span className="d-title">Link</span>
          {' '}
          to the
          {' '}
          <a href={detailMeal.strSource}>Source</a>
        </div>
      </div>
    </div>

    <h1 className="d-table">Ingredients</h1>
    <Table detailMeal={detailMeal} />
  </div>
);

export default MapDetailMeal;

MapDetailMeal.propTypes = {
  detailMeal: PropTypes.instanceOf(Object).isRequired,
};
