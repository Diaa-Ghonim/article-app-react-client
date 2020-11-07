import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE

} from '../actionTypes';

import axios from 'axios';

const addArticleSuccess = (article) => ({
  type: ADD_ARTICLE_SUCCESS,
  payload: article
});

const addArticleFailure = (errorMsg) => ({
  type: ADD_ARTICLE_FAILURE,
  payload: errorMsg
});

export const addArticle = (article) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles', article);
    const data = response.data;
    dispatch(addArticleSuccess(data));
  } catch (error) {
    if (error.response) {
      dispatch(addArticleFailure(error.response.data))
    } else {
      dispatch(addArticleFailure('Something wrong happen please try again !!'))

    }
  }
};

