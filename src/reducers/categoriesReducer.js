import { FETCH_CATEGORIES } from '../actions/types';

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            console.log("FETCH_CATEGORIES:", action.payload);
            return {
                ...state,
                categories: action.payload
            };
    
        default:
            return state;
    }
}

export default categoriesReducer;
