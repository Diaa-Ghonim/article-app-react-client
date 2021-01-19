import { parseError } from '../../../../util/parseError';
import { setFetchedArticles } from '../../articleReducerUtil';
import { GET_TOP_READING_ARTICLES } from '../actionTypes';

export const topReadingArticlesHandler = {
  [GET_TOP_READING_ARTICLES.LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_TOP_READING_ARTICLES.SUCCESS]: (state, { payload: { articles } }) => {
    return setFetchedArticles(state, articles);
  },
  [GET_TOP_READING_ARTICLES.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },
};
