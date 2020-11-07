import {
  GET_USER_ARTICLES_LOADING_START,
  GET_USER_ARTICLES_SUCCESS,
  GET_USER_ARTICLES_FAILURE
} from '../actionTypes';
import axios from 'axios';


/**------------------------ actions creator --------------------------------*/

const getUserArticlesSuccess = (articles) => ({
  type: GET_USER_ARTICLES_SUCCESS,
  payload: articles
});

const getUserArticlesFailure = (errorMsg) => ({
  type: GET_USER_ARTICLES_FAILURE,
  payload: errorMsg
});

const getUserArticlesLoadingStart = () => ({
  type: GET_USER_ARTICLES_LOADING_START
});

/**-------------------------- get user articles ------------------------------- */

export const getUserArticles = (username) => async (dispatch) => {
  dispatch(getUserArticlesLoadingStart());

  try {
    const response = await axios.get(`/api/articles/all/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch(getUserArticlesSuccess(data));
    }, 0);
  } catch (error) {
    if (error.response) {
      dispatch(getUserArticlesFailure(error.response.data.message));
    } else {
      dispatch(getUserArticlesFailure('Something went wrong !!'));
    }
  }
};
