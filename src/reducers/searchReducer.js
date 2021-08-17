import { FETCH_BY_NAME, FETCH_BY_INGRIDIENT, FETCH_BY_AREA } from '../actions/types';

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_BY_NAME:
            return {
                ...state,
                searchedItem: action.payload
            };
        case FETCH_BY_AREA || FETCH_BY_INGRIDIENT:
            return {
                ...state,
                searchedItems: action.payload
            }
    
        default:
            return state;
    }
}

export default searchReducer;
