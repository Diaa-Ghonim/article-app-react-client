import { parseError } from '../../../../util/parseError';
import { setFetchedArticle } from '../../articleReducerUtil';
import { GET_ARTICLE } from '../actionTypes';

export const articleHandler = {
  [GET_ARTICLE.LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_ARTICLE.SUCCESS]: (state, { payload: { article } }) => {
    return {
      article: setFetchedArticle(article),
      isLoading: false,
      error: null,
    };
  },
  [GET_ARTICLE.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },
};
