import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';
import thunk from 'redux-thunk';
// import multi from 'redux-multi'
const intialState = {};
const middlewars = [thunk];
export const store = createStore(
  rootReducer,
  intialState, compose(
    applyMiddleware(...middlewars),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState());
