import { FETCH_MEALS } from '../actions/types';

const mealsReducer = (state = '', action) => {
    switch (action.type) {
        case FETCH_MEALS:
            return action.meals;
    
        default:
            return state;
    }
}

export default mealsReducer;