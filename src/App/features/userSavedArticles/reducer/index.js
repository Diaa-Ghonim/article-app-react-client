import {
  GET_USER_SAVED_ARTICLES_LOADING_START,
  GET_USER_SAVED_ARTICLES_SUCCESS,
  GET_USER_SAVED_ARTICLES_FAILURE
} from '../actionTypes';

import { articleActionTypes } from '../../../shared/Article';
import {
  handleArticleInterActionsState,
  setFetchedArticles
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

export const userSavedArticlesReducer = (state = initialState, action) => {


  switch (action.type) {
    case GET_USER_SAVED_ARTICLES_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_SAVED_ARTICLES_FAILURE:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    case GET_USER_SAVED_ARTICLES_SUCCESS:
      return setFetchedArticles(state, action.payload);

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
