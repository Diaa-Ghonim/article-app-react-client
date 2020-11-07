import {
  GET_USER_SAVED_ARTICLES_LOADING_START,
  GET_USER_SAVED_ARTICLES_SUCCESS,
  GET_USER_SAVED_ARTICLES_FAILURE
} from '../actionTypes';
import axios from 'axios';


const getUserSavedArticlesSuccess = (articles) => ({
  type: GET_USER_SAVED_ARTICLES_SUCCESS,
  payload: articles
});

const getUserSavedArticlesFailure = (errorMsg) => ({
  type: GET_USER_SAVED_ARTICLES_FAILURE,
  payload: errorMsg
});

const getUserSavedArticlesLoadingStart = () => ({
  type: GET_USER_SAVED_ARTICLES_LOADING_START
});

export const getUserSavedArticles = (username) => async (dispatch) => {
  dispatch(getUserSavedArticlesLoadingStart());
  try {
    const response = await axios.get(`/api/articles/saved/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch(getUserSavedArticlesSuccess(data));
    }, 1000);
  } catch (error) {
    if (error.response) {
      dispatch(getUserSavedArticlesFailure(error.response.data));
    } else {
      dispatch(getUserSavedArticlesFailure('Something went wrong !!'));
    }
  }
};
