import { GET_USER_DISLIKED_ARTICLES } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const getUserDislikedArticlesSuccess = createAction(
  GET_USER_DISLIKED_ARTICLES.SUCCESS,
  'articles'
);
const getUserDislikedArticlesFailure = createAction(
  GET_USER_DISLIKED_ARTICLES.FAILURE,
  'error'
);
const getUserDislikedArticlesLoadingStart = createAction(
  GET_USER_DISLIKED_ARTICLES.LOADING
);

export const getUserDislikedArticles = (username) => async (dispatch) => {
  dispatch(getUserDislikedArticlesLoadingStart());

  try {
    const { data: articles } = await axios.get(
      `/api/articles/disliked/${username}`
    );
    dispatch(getUserDislikedArticlesSuccess(articles));
  } catch (error) {
    dispatch(getUserDislikedArticlesFailure(error));
  }
};
