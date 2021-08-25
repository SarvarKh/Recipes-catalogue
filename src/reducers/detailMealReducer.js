import { FETCH_DETAIL_MEAL } from '../actions/types';

const detailMealReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DETAIL_MEAL:
      return {
        ...state,
        detailMeal: action.payload,
      };

    default:
      return state;
  }
};

export default detailMealReducer;
