import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';
import { GET_TOP_READING_ARTICLES } from '../actionTypes';

/**------------------------ actions creator --------------------------------*/

const getTopReadingArticlesSuccess = createAction(
  GET_TOP_READING_ARTICLES.SUCCESS,
  'articles'
);
const getTopReadingArticlesFailure = createAction(
  GET_TOP_READING_ARTICLES.FAILURE,
  'error'
);
const getTopReadingArticlesLoadingStart = createAction(
  GET_TOP_READING_ARTICLES.LOADING
);

/**-------------------------- get user articles ------------------------------- */

export const getTopReading = () => async (dispatch) => {
  dispatch(getTopReadingArticlesLoadingStart());
  try {
    const { data: articles } = await axios.get('/api/articles/top-reading');
    dispatch(getTopReadingArticlesSuccess(articles));
  } catch (error) {
    dispatch(getTopReadingArticlesFailure(error));
  }
};
