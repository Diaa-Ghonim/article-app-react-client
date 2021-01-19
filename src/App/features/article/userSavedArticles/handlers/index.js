import { parseError } from '../../../../util/parseError';
import { setFetchedArticles } from '../../articleReducerUtil';
import { GET_USER_SAVED_ARTICLES } from '../actionTypes';

export const userSavedArticlesHandler = {
  [GET_USER_SAVED_ARTICLES.LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_USER_SAVED_ARTICLES.SUCCESS]: (state, { payload: { articles } }) => {
    return setFetchedArticles(state, articles);
  },
  [GET_USER_SAVED_ARTICLES.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },
};
