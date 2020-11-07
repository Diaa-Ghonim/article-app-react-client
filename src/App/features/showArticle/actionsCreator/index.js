import {
  GET_ARTICLE_LOADING_START,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE
} from '../actionTypes';

import axios from 'axios';
const getArticleSuccess = (article) => ({
  type: GET_ARTICLE_SUCCESS,
  payload: article
});

const getArticleFailure = (errorMsg) => ({
  type: GET_ARTICLE_FAILURE,
  pauload: errorMsg
});

const getArticleLoadingStart = () => ({
  type: GET_ARTICLE_LOADING_START
});
export const getArticle = ({ username, articleID }) => async (dispatch) => {
  dispatch(getArticleLoadingStart());
  // console.log(articleID);
  // const params = { username: username, articleID: articleID };

  try {
    const response = await axios.get(`/api/articles/${username}/${articleID}`);
    const data = response.data;
    setTimeout(() => {
      dispatch(getArticleSuccess(data));
    }, 1000);
  } catch (error) {
    if (error.response) {

      setTimeout(() => {
        dispatch(getArticleFailure(error.response.data.message));
      }, 1000);
    } else {
      dispatch(getArticleFailure('Something went wrong !!!'));
    }
  }
  return;
};

