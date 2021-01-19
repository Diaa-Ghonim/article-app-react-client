import {
  setFetchedArticles,
  addArticleToArray,
} from '../../articleReducerUtil';
import { GET_FEED_ARTICLES } from '../actionTypes';
import { addArticleActionTypes } from '../../createArticle';
import { parseError } from '../../../../util/parseError';

export const feedHandlers = {
  [GET_FEED_ARTICLES.LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: true,
    };
  },

  [GET_FEED_ARTICLES.SUCCESS]: (state, { payload: { data } }) => {
    return setFetchedArticles(state, data);
  },

  [GET_FEED_ARTICLES.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },

  [addArticleActionTypes.ADD_ARTICLE.SUCCESS]: (
    state,
    { payload: { article } }
  ) => {
    return addArticleToArray(state, article);
  },
};
