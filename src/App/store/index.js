import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../rootReducer';
import thunk from 'redux-thunk';
import { callAPIMiddleware } from '../util/createMiddleware';
// import multi from 'redux-multi'
console.log(process.env.NODE_ENV);
const preloadState = {};
const middlewars = [otherMiddleWare, callAPIMiddleware, thunk];
export const store = createStore(
  rootReducer,
  preloadState,
  compose(
    process.env.NODE_ENV === 'development'
      ? (window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middlewars))
      : applyMiddleware(...middlewars)
  )
);
// console.log(store.getState());

function otherMiddleWare({ dispatch, getState }) {
  return (next) => (action) => {
    // console.log(action, 'from other middleware');
    next(action);
  };
}
