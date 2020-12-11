import { GET_USER_SAVED_ARTICLES } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';


const getUserSavedArticlesSuccess = createAction(GET_USER_SAVED_ARTICLES.SUCCESS, 'articles');
const getUserSavedArticlesFailure = createAction(GET_USER_SAVED_ARTICLES.FAILURE, 'error');
const getUserSavedArticlesLoadingStart = createAction(GET_USER_SAVED_ARTICLES.LOADING);


export const getUserSavedArticles = (username) => async (dispatch) => {
  dispatch(getUserSavedArticlesLoadingStart());
  try {
    const { data: articles } = await axios.get(`/api/articles/saved/${username}`);
    dispatch(getUserSavedArticlesSuccess(articles));
  } catch (error) {
    dispatch(getUserSavedArticlesFailure(error));
  }
};
