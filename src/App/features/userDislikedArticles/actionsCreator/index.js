import {
  GET_USER_DISLIKED_ARTICLES_LOADING_START,
  GET_USER_DISLIKED_ARTICLES_SUCCESS,
  GET_USER_DISLIKED_ARTICLES_FAILURE
} from '../actionTypes';
import axios from 'axios';

const getUserDislikedArticlesSuccess = (articles) => ({
  type: GET_USER_DISLIKED_ARTICLES_SUCCESS,
  payload: articles
});

const getUserDislikedArticlesFailure = (errorMsg) => ({
  type: GET_USER_DISLIKED_ARTICLES_FAILURE,
  payload: errorMsg
});

const getUserDislikedArticlesLoadingStart = () => ({
  type: GET_USER_DISLIKED_ARTICLES_LOADING_START
});

export const getUserDislikedArticles = (username) => async (dispatch) => {

  dispatch(getUserDislikedArticlesLoadingStart());

  try {
    const response = await axios.get(`/api/articles/disliked/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch(getUserDislikedArticlesSuccess(data));
    }, 0);
  } catch (error) {
    if (error.response) {
      dispatch(getUserDislikedArticlesFailure(error.response.data));
    } else {
      dispatch(getUserDislikedArticlesFailure('Something went wrong !!'));

    }
  }
};
