import { ADD_ARTICLE } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const addArticleSuccess = createAction(ADD_ARTICLE.SUCCESS, 'article');
const addArticleFailure = createAction(ADD_ARTICLE.FAILURE, 'error');

export const addArticle = ({ title, content }) => async (dispatch) => {
  try {
    const { data: article } = await axios.post('/api/articles', {
      title,
      content,
    });
    dispatch(addArticleSuccess(article));
  } catch (error) {
    dispatch(addArticleFailure(error));
  }
};
