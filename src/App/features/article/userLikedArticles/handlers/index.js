import { parseError } from '../../../../util/parseError';
import { setFetchedArticles } from '../../articleReducerUtil';
import { GET_USER_LIKED_ARTICLES } from '../actionTypes';

export const userLikedArticlesHandler = {
  [GET_USER_LIKED_ARTICLES.LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_USER_LIKED_ARTICLES.SUCCESS]: (state, { payload: { articles } }) => {
    return setFetchedArticles(state, articles);
  },
  [GET_USER_LIKED_ARTICLES.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },
};
