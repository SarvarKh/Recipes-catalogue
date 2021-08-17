import { FETCH_BY_NAME, FETCH_BY_INGRIDIENT, FETCH_BY_AREA } from '../actions/types';

const searchReducer = (state = [], action) => {
    // console.log("Reducer: ", action.payload);
    switch (action.type) {
        case FETCH_BY_NAME || FETCH_BY_AREA || FETCH_BY_INGRIDIENT:
            return {
                ...state,
                searchedItems: action.payload
            }
    
        default:
            return state;
    }
}

export default searchReducer;
