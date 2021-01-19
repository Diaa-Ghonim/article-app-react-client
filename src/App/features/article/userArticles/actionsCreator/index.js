import { GET_USER_ARTICLES } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

/**------------------------ actions creator --------------------------------*/

const getUserArticlesLoadingStart = createAction(GET_USER_ARTICLES.LOADING);
const getUserArticlesSuccess = createAction(
  GET_USER_ARTICLES.SUCCESS,
  'articles'
);
const getUserArticlesFailure = createAction(GET_USER_ARTICLES.FAILURE, 'error');

/**-------------------------- get user articles ------------------------------- */

export const getUserArticles = (username) => async (dispatch) => {
  dispatch(getUserArticlesLoadingStart());
  try {
    const { data: articles } = await axios.get(`/api/articles/${username}`);
    dispatch(getUserArticlesSuccess(articles));
  } catch (error) {
    dispatch(getUserArticlesFailure(error));
  }
};
