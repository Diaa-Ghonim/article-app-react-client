import {
  FEED_LOADING_START,
  FEED_GET_ARTICLES_SUCCESS,
  FEED_GET_ARTICLES_FAILURE
} from '../actionTypes';

import { articleActionTypes } from '../../../shared/Article';
import { actionTypes } from '../../createArticle';
// import update from 'immutability-helper';
import {
  handleArticleInterActionsState,
  addLikeToArticleInArray,
  removeLikeFromArticleInArray,
  setFetchedArticles,
  addArticleToArray
} from '../../../util/articleReducerUtitilites';

export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: {
    isError: false,
    msg: '',
  },
};

export const feedReducer = (state = initialState, action) => {


  switch (action.type) {
    case FEED_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };

    case FEED_GET_ARTICLES_FAILURE:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    case FEED_GET_ARTICLES_SUCCESS:
      return setFetchedArticles(state, action.payload);

    case actionTypes.ADD_ARTICLE_SUCCESS:
      return addArticleToArray(state, action.payload);
    case articleActionTypes.DELETE_ARTICLE_SUCCESS:
    case articleActionTypes.LIKE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_LIKE_ARTICLE_SUCCESS:
    case articleActionTypes.DISLIKE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_DISLIKE_ARTICLE_SUCCESS:
    case articleActionTypes.SAVE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_SAVE_ARTICLE_SUCCESS:
      return handleArticleInterActionsState(state, action);

    default:
      return state;
  }


};
