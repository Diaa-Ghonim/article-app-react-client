import {
  DELETE_ARTICLE,
  DISLIKE_ARTICLE,
  LIKE_ARTICLE,
  REMOVE_DISLIKE_ARTICLE,
  REMOVE_LIKE_ARTICLE,
  REMOVE_SAVE_ARTICLE,
  SAVE_ARTICLE,
  SHARE_ARTICLE,
  CLEAR_ARTICLE_ACTION_ERROR,
} from '../actionTypes';

// import axios from 'axios';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

/**---------------------------- actions creator------------------------------- */

const deleteArticleSuccess = createAction(DELETE_ARTICLE.SUCCESS, 'articleID');
const deleteArticleFailure = createAction(
  DELETE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const likeArticleSuccess = createAction(
  LIKE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const likeArticleFailure = createAction(
  LIKE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const dislikeArticleSuccess = createAction(
  DISLIKE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const dislikeArticleFailure = createAction(
  DISLIKE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const saveArticleSuccess = createAction(
  SAVE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const saveArticleFailure = createAction(
  SAVE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const shareArticleSuccess = createAction(
  SHARE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const shareArticleFailure = createAction(
  SHARE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const removeLikeArticleSuccess = createAction(
  REMOVE_LIKE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const removeLikeArticleFailure = createAction(
  REMOVE_LIKE_ARTICLE.FAILURE,
  'error',
  'articleID'
);
const removeDislikeArticleSuccess = createAction(
  REMOVE_DISLIKE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const removeDislikeArticleFailure = createAction(
  REMOVE_DISLIKE_ARTICLE.FAILURE,
  'error',
  'articleID'
);

const removeSaveArticleSuccess = createAction(
  REMOVE_SAVE_ARTICLE.SUCCESS,
  'user',
  'articleID'
);
const removeSaveArticleFailure = createAction(
  REMOVE_SAVE_ARTICLE.FAILURE,
  'error',
  'articleID'
);

/**---------------------------- delete article ----------------------------------- */

export const deleteArticle = (articleID) => async (dispatch) => {
  try {
    await axios.delete('/api/articles/' + articleID);
    dispatch(deleteArticleSuccess(articleID));
  } catch (error) {
    dispatch(deleteArticleFailure(error, articleID));
  }
};

/**---------------------------- like article ----------------------------------- */

export const likeArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/like', {
      articleID,
    });
    dispatch(likeArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(likeArticleFailure(error, articleID));
  }
};

/**---------------------------- removelike article ----------------------------------- */

export const removeLikeArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/remove-like', {
      articleID,
    });
    dispatch(removeLikeArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(removeLikeArticleFailure(error, articleID));
  }
};

/**---------------------------- dislike article ----------------------------------- */

export const dislikeArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/dislike', {
      articleID,
    });
    dispatch(dislikeArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(dislikeArticleFailure(error, articleID));
  }
};

/**---------------------------- removeDislike article ----------------------------------- */

export const removeDislikeArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/remove-dislike', {
      articleID,
    });
    dispatch(removeDislikeArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(removeDislikeArticleFailure(error, articleID));
  }
};

/**---------------------------- save article ----------------------------------- */

export const saveArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/save', {
      articleID,
    });
    dispatch(saveArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(saveArticleFailure(error, articleID));
  }
};

/**---------------------------- removeSave article ----------------------------------- */

export const removeSaveArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/remove-save', {
      articleID,
    });
    dispatch(removeSaveArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(removeSaveArticleFailure(error, articleID));
  }
};

/**---------------------------- share article ----------------------------------- */

export const shareArticle = (articleID) => async (dispatch) => {
  try {
    const { data: user } = await axios.post('/api/articles/share', {
      articleID,
    });
    dispatch(shareArticleSuccess(user, articleID));
  } catch (error) {
    dispatch(shareArticleFailure(error, articleID));
  }
};

/**------------------ clear article action error article --------------------- */

export const clearArticleActionError = () => ({
  type: CLEAR_ARTICLE_ACTION_ERROR,
});
