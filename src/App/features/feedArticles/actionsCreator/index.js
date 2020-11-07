import {

  FEED_LOADING_START,
  FEED_GET_ARTICLES_SUCCESS,
  FEED_GET_ARTICLES_FAILURE
} from '../actionTypes';

import axios from 'axios';

const feedLoadingStart = () => ({
  type: FEED_LOADING_START
});

const feedGetArticlesSuccess = (articles) => ({
  type: FEED_GET_ARTICLES_SUCCESS,
  payload: articles
});

const feedGetArticlesFailure = (errorMsg) => ({
  type: FEED_GET_ARTICLES_FAILURE,
  payload: errorMsg
})

export const getFeedArticles = () => async (dispatch, getState) => {
  dispatch(feedLoadingStart);
  try {
    console.log(getState(), 'get articles');
    const { isAuthenticate } = getState().mainUser;
    let response = null;
    if (isAuthenticate) {
      response = await axios.get('/api/articles/all');
    } else {
      response = await axios.get('/api/articles/common/latest');
    }

    const data = response.data;
    setTimeout(() => {
      dispatch(feedGetArticlesSuccess(data));
    }, 0);
  } catch (error) {

    setTimeout(() => {
      if (error.response) {
        dispatch(feedGetArticlesFailure(error.response.data.message));
      } else {
        dispatch(feedGetArticlesFailure('Something went wrong !!!'));
      }
    });
  }
};






