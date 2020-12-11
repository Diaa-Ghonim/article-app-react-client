import { GET_USER_LIKED_ARTICLES } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const getUserLikedArticlesSuccess = createAction(GET_USER_LIKED_ARTICLES.SUCCESS, 'articles');
const getUserLikedArticlesFailure = createAction(GET_USER_LIKED_ARTICLES.FAILURE, 'error');
const getUserLikedArticlesLoadingStart = createAction(GET_USER_LIKED_ARTICLES.LOADING);

export const getUserLikedArticles = (username) => async (dispatch) => {
  dispatch(getUserLikedArticlesLoadingStart());
  try {
    const { data: articles } = await axios.get(`/api/articles/liked/${username}`);
    dispatch(getUserLikedArticlesSuccess(articles));
  } catch (error) {
    dispatch(getUserLikedArticlesFailure(error));
  }
};

