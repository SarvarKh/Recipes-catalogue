import { FETCH_MEALS } from '../actions/types';

const mealsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };

    default:
      return state;
  }
};

export default mealsReducer;
