import {
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,

  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAILURE,

  DISLIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_FAILURE,

  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE,

  SHARE_ARTICLE_SUCCESS,
  SHARE_ARTICLE_FAILURE,

  REMOVE_LIKE_ARTICLE_SUCCESS,
  REMOVE_LIKE_ARTICLE_FAILURE,

  REMOVE_DISLIKE_ARTICLE_SUCCESS,
  REMOVE_DISLIKE_ARTICLE_FAILURE,

  REMOVE_SAVE_ARTICLE_SUCCESS,
  REMOVE_SAVE_ARTICLE_FAILURE,
  CLEAR_ARTICLE_ACTION_ERROR

} from '../actionTypes';

import axios from 'axios';

/**---------------------------- actions creator------------------------------- */

const deleteArticleSuccess = (articleID) => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload: articleID
});

const deleteArticleFailure = (errorMsg, articleId) => ({
  type: DELETE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const likeArticleSuccess = (user, articleId) => ({
  type: LIKE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});

const likeArticleFailure = (errorMsg, articleId) => ({
  type: LIKE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const dislikeArticleSuccess = (user, articleId) => ({
  type: DISLIKE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});

const dislikeArticleFailure = (errorMsg, articleId) => ({
  type: DISLIKE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const saveArticleSuccess = (user, articleId) => ({
  type: SAVE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});

const saveArticleFailure = (errorMsg, articleId) => ({
  type: SAVE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const shareArticleSuccess = (user, articleId) => ({
  type: SHARE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});

const shareArticleFailure = (errorMsg, articleId) => ({
  type: SHARE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const removeLikeArticleSuccess = (user, articleId) => ({
  type: REMOVE_LIKE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});


const removeLikeArticleFailure = (errorMsg, articleId) => ({
  type: REMOVE_LIKE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const removeDislikeArticleSuccess = (user, articleId) => ({
  type: REMOVE_DISLIKE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});


const removeDislikeArticleFailure = (errorMsg, articleId) => ({
  type: REMOVE_DISLIKE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});

const removeSaveArticleSuccess = (user, articleId) => ({
  type: REMOVE_SAVE_ARTICLE_SUCCESS,
  payload: user,
  articleId: articleId

});

const removeSaveArticleFailure = (errorMsg, articleId) => ({
  type: REMOVE_SAVE_ARTICLE_FAILURE,
  payload: errorMsg,
  articleId: articleId
});



/**---------------------------- delete article ----------------------------------- */

export const deleteArticle = (articleID) => async (dispatch) => {

  try {
    const response = await axios.delete('/api/articles/' + articleID);
    const data = response.data;
    dispatch(DELETE_ARTICLE_SUCCESS(articleID));
  } catch (error) {
    if (error.response) {
      dispatch(deleteArticleFailure(error.response.data, articleID));
    } else {
      dispatch(deleteArticleFailure('Something went wrong !!'));
    }
  }
};

/**---------------------------- like article ----------------------------------- */

export const likeArticle = (articleID) => async (dispatch) => {
  console.log('liike article dispatched');
  try {
    const response = await axios.post('/api/articles/like', { articleID });
    const user = response.data;
    console.log(user, response, 'user and response');
    dispatch(likeArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(likeArticleFailure(error.response.data, articleID));
    } else {
      dispatch(likeArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- removelike article ----------------------------------- */

export const removeLikeArticle = (articleID) => async (dispatch) => {
  try {
    // throw new Error('Something went wrong');
    const response = await axios.post('/api/articles/remove-like', { articleID });
    const user = response.data;
    dispatch(removeLikeArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(removeLikeArticleFailure(error.response.data, articleID));
    } else {
      dispatch(removeLikeArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- dislike article ----------------------------------- */

export const dislikeArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/dislike', { articleID });
    const user = response.data;
    console.log(response);
    dispatch(dislikeArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(dislikeArticleFailure(error.response.data, articleID));
    } else {
      dispatch(dislikeArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- removeDislike article ----------------------------------- */

export const removeDislikeArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/remove-dislike', { articleID });
    const user = response.data;
    console.log(response);

    dispatch(removeDislikeArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(removeDislikeArticleFailure(error.response.data, articleID));
    } else {
      dispatch(removeDislikeArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- save article ----------------------------------- */

export const saveArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/save', { articleID });
    const user = response.data;
    dispatch(saveArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(saveArticleFailure(error.response.data, articleID));
    } else {
      dispatch(saveArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- removeSave article ----------------------------------- */

export const removeSaveArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/remove-save', { articleID });
    const user = response.data;
    dispatch(removeSaveArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(removeSaveArticleFailure(error.response.data, articleID));
    } else {
      dispatch(removeSaveArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**---------------------------- share article ----------------------------------- */

export const shareArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/share', { articleID });
    const user = response.data;
    dispatch(shareArticleSuccess(user, articleID));
  } catch (error) {
    if (error.response) {
      dispatch(shareArticleFailure(error.response.data, articleID));
    } else {
      dispatch(shareArticleFailure('Something went wrong !!', articleID));
    }
  }
};

/**------------------ clear article action error article --------------------- */

export const clearArticleActionError = () => ({
  type: CLEAR_ARTICLE_ACTION_ERROR
});
