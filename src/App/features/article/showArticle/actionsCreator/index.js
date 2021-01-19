import { GET_ARTICLE } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const getArticleSuccess = createAction(GET_ARTICLE.SUCCESS, 'article');
const getArticleFailure = createAction(GET_ARTICLE.FAILURE, 'error');
const getArticleLoadingStart = createAction(GET_ARTICLE.LOADING);

export const getArticle = ({ username, articleID }) => async (dispatch) => {
  dispatch(getArticleLoadingStart());
  try {
    const { data: article } = await axios.get(
      `/api/articles/${username}/${articleID}`
    );
    dispatch(getArticleSuccess(article));
  } catch (error) {
    dispatch(getArticleFailure(error));
  }
};
