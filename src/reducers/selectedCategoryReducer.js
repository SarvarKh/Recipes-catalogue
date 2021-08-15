import { SELECT_CATEGORY } from '../actions/types';

const selectedCategoryReducer = (state = [], action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.selectedCategory;
    
        default:
            return state;
    }
}

export default selectedCategoryReducer;
