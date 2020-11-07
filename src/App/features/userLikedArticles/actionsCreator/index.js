import {
  GET_USER_LIKED_ARTICLES_LOADING_START,
  GET_USER_LIKED_ARTICLES_SUCCESS,
  GET_USER_LIKED_ARTICLES_FAILURE
} from '../actionTypes';
import axios from 'axios';

const getUserLikedArticlesSuccess = (articles) => ({
  type: GET_USER_LIKED_ARTICLES_SUCCESS,
  payload: articles
});

const getUserLikedArticlesFailure = (errorMsg) => ({
  type: GET_USER_LIKED_ARTICLES_FAILURE,
  payload: errorMsg
});

const getUserLikedArticlesLoadingStart = () => ({
  type: GET_USER_LIKED_ARTICLES_LOADING_START
});

export const getUserLikedArticles = (username) => async (dispatch) => {
  dispatch(getUserLikedArticlesLoadingStart());

  try {
    const response = await axios.get(`/api/articles/liked/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch(getUserLikedArticlesSuccess(data));
    }, 0);
  } catch (error) {
    if (error.response) {
      dispatch(getUserLikedArticlesFailure(error.response.data));
    } else {
      dispatch(getUserLikedArticlesFailure('Something went wrong !!'));
    }
  }
};

