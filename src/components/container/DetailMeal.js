import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import MapDetailMeal from '../presentation/MapDetailMeal';
import { fetchDetailMeal } from '../../actions/index';

const DetailMeal = ({ detailMeal, fetchDetailMeal }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchDetailMeal(id);
  }, []);
  return (
    <main>
      {
        Object.keys(detailMeal).length !== 0
          ? <MapDetailMeal detailMeal={detailMeal} />
          : (
            <h2>
              Please go back to the previous page and select meal to see details...
              {id}
            </h2>
          )
      }
    </main>
  );
};

const mapStateToProps = (state) => ({
  detailMeal: state.detailMeal.detailMeal,
});

export default connect(mapStateToProps, { fetchDetailMeal })(DetailMeal);

DetailMeal.propTypes = {
  detailMeal: PropTypes.instanceOf(Object).isRequired,
  fetchDetailMeal: PropTypes.func.isRequired,
};
