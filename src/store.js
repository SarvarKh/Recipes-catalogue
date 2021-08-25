import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const initialState = {
  detailMeal: {
    detailMeal: {},
  },
  meals: {
    meals: [],
  },
  categories: {
    categories: [],
  },
  searchedItems: [],
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
