import { parseError } from '../../../../util/parseError';
import {
  addDislikeToArticleInArray,
  addLikeToArticleInArray,
  addSaveToArticleInArray,
  deleteArticleFromArray,
  removeDislikeFromArticleInArray,
  removeLikeFromArticleInArray,
  removeSaveFromArticleInArray,
  deleteArticle,
  addLikeToArticle,
  removelikefromArticle,
  addDislikeToArticle,
  removeDislikeFromArticle,
  addSaveToArticle,
  removeSaveFromArticle,

} from '../../articleReducerUtil';
import {
  DELETE_ARTICLE,
  DISLIKE_ARTICLE,
  LIKE_ARTICLE,
  REMOVE_DISLIKE_ARTICLE,
  REMOVE_LIKE_ARTICLE,
  REMOVE_SAVE_ARTICLE,
  SAVE_ARTICLE,
  SHARE_ARTICLE,
  CLEAR_ARTICLE_ACTION_ERROR
} from '../actionTypes';

export const handlerActionsForArrayOfArticles = {
  [DELETE_ARTICLE.SUCCESS]: (state, { payload: { articleID } }) => {
    return deleteArticleFromArray(state, articleID);
  },
  [LIKE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return addLikeToArticleInArray(state, articleID, user);
  },
  [REMOVE_LIKE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return removeLikeFromArticleInArray(state, articleID, user);
  },
  [DISLIKE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return addDislikeToArticleInArray(state, articleID, user);
  },
  [REMOVE_DISLIKE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return removeDislikeFromArticleInArray(state, articleID, user);
  },
  [SAVE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return addSaveToArticleInArray(state, articleID, user);
  },
  [REMOVE_SAVE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    return removeSaveFromArticleInArray(state, articleID, user);
  },
  [SHARE_ARTICLE.SUCCESS]: (state, { payload: { user, articleID } }) => {
    console.log(' share article action');
  },
}

export const handlerActionsForOneArticle = {
  [DELETE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: deleteArticle(state.article, user)
    }
  },
  [LIKE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: addLikeToArticle(state.article, user)
    }
  },
  [REMOVE_LIKE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: removelikefromArticle(state.article, user)
    }
  },
  [DISLIKE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: addDislikeToArticle(state.article, user)
    }
  },
  [REMOVE_DISLIKE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: removeDislikeFromArticle(state.article, user)
    }
  },
  [SAVE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: addSaveToArticle(state.article, user)
    }
  },
  [REMOVE_SAVE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      article: removeSaveFromArticle(state.article, user)
    }
  },
  [SHARE_ARTICLE.SUCCESS]: (state, { payload: { user } }) => {
    console.log(' share article action');
  },
}

export const handlerErrorActionsForArticle = {
  [DELETE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [LIKE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [REMOVE_LIKE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [DISLIKE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [REMOVE_DISLIKE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [SAVE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [REMOVE_SAVE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [SHARE_ARTICLE.FAILURE]: (state, { payload: { error, articleID } }) => {
    return {
      articleID: articleID,
      error: parseError(error)
    }
  },
  [CLEAR_ARTICLE_ACTION_ERROR]: (state, { payload }) => {
    return {
      articleID: '',
      error: null
    }
  },
}