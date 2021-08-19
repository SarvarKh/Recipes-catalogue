import { FETCH_BY_NAME } from '../actions/types';

const searchReducer = (state = [], action) => {
  // console.log("Reducer: ", action.payload);
  switch (action.type) {
    case FETCH_BY_NAME:
      return {
        ...state,
        searchedItems: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
