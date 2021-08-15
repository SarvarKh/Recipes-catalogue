import { createStore } from "redux";
import rootReducer from './reducers/rootReducer';

const initialState = {
    selectedCategory: "Seafood",
    meals: [],
    categories: [],
}

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;