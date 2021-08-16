import { FETCH_MEALS } from '../actions/types';

const initialState = {
    selectedCategory: "Seafood",
    meals: [],
    categories: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEALS:
            console.log("FETCH_MEALS...", action.payload);
            return {
                ...state,
                meals: action.payload
            };
    
        default:
            return state;
    }
}

export default mealsReducer;