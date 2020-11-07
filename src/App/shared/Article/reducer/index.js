
import {
  DELETE_ARTICLE_FAILURE,
  LIKE_ARTICLE_FAILURE,
  REMOVE_LIKE_ARTICLE_FAILURE,
  DISLIKE_ARTICLE_FAILURE,
  REMOVE_DISLIKE_ARTICLE_FAILURE,
  SAVE_ARTICLE_FAILURE,
  REMOVE_SAVE_ARTICLE_FAILURE,
  CLEAR_ARTICLE_ACTION_ERROR
} from '../actionTypes';

const intialState = {
  articleId: '',
  errorMsg: ''
}

export const articleActionErrorReducer = (state = intialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_FAILURE:
    case LIKE_ARTICLE_FAILURE:
    case REMOVE_LIKE_ARTICLE_FAILURE:
    case DISLIKE_ARTICLE_FAILURE:
    case REMOVE_DISLIKE_ARTICLE_FAILURE:
    case SAVE_ARTICLE_FAILURE:
    case REMOVE_SAVE_ARTICLE_FAILURE:
      return {
        articleId: action.articleId,
        errorMsg: action.payload
      }

    case CLEAR_ARTICLE_ACTION_ERROR: {
      return {
        articleId: '',
        errorMsg: ''
      }
    }
    default:
      return state;
  }
}