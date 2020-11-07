import {
  GET_ARTICLE_LOADING_START,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE
} from '../actionTypes';

import {
  deleteArticle,
  addLikeToArticle,
  addDislikeToArticle,
  addSaveToArticle,
  removeDislikeFromArticle,
  removeSaveFromArticle,
  removelikefromArticle,
  setFetchedArticle
} from '../../../util/articleReducerUtitilites';
import { articleActionTypes } from '../../../shared/Article';


export const initialState = {
  article: null,
  isLoading: false,
  isFetched: false,
  error: {
    isError: false,
    msg: '',
  },
};

export const articleReducer = (state = initialState, action) => {
  console.log(action, 'article reducerrrrrrrrr');

  switch (action.type) {
    case GET_ARTICLE_LOADING_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_ARTICLE_SUCCESS:
      return {
        article: setFetchedArticle(action.payload),
        isLoading: false,
        error: { isError: false, msg: '' }
      }

    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { isError: true, msg: action.payload }
      }

    case articleActionTypes.DELETE_ARTICLE_SUCCESS:
    case articleActionTypes.LIKE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_LIKE_ARTICLE_SUCCESS:
    case articleActionTypes.DISLIKE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_DISLIKE_ARTICLE_SUCCESS:
    case articleActionTypes.SAVE_ARTICLE_SUCCESS:
    case articleActionTypes.REMOVE_SAVE_ARTICLE_SUCCESS:
      return handleArticleActions(state, action);
    default:
      return state;
  }

};


function handleArticleActions(state, action) {

  if (!state.article || state.article.id !== action.articleId) return state;

  switch (action.type) {
    case articleActionTypes.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: deleteArticle(state.article, action.payload)
      }

    case articleActionTypes.LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: addLikeToArticle(state.article, action.payload)
      }
    case articleActionTypes.REMOVE_LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: removelikefromArticle(state.article, action.payload)
      }
    case articleActionTypes.DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: addDislikeToArticle(state.article, action.payload)
      }
    case articleActionTypes.REMOVE_DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: removeDislikeFromArticle(state.article, action.payload)
      }
    case articleActionTypes.SAVE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: addSaveToArticle(state.article, action.payload)
      }
    case articleActionTypes.REMOVE_SAVE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: removeSaveFromArticle(state.article, action.payload)
      }

    default:
      return state;
  }
}
