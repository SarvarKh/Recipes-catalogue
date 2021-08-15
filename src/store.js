import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
    selectedCategory: "Seafood",
    meals: [],
    categories: [],
}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
);

export default store;