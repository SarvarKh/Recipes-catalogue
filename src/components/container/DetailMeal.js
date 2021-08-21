import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapDetailMeal from '../presentation/MapDetailMeal';

const DetailMeal = ({ detailMeal }) => (
  <main>
    {
      detailMeal !== undefined
        ? <MapDetailMeal detailMeal={detailMeal} />
        : <h2>Please go back to the previous page and select meal to see details...</h2>
    }
  </main>
);

const mapStateToProps = (state) => ({
  detailMeal: state.detailMeal.detailMeal,
});

export default connect(mapStateToProps, null)(DetailMeal);

DetailMeal.propTypes = {
  detailMeal: PropTypes.instanceOf(Object).isRequired,
};
