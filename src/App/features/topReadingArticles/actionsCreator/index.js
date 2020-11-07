import axios from 'axios';

import {
  GET_TOP_READING_ARTICLES_LOADING_START,
  GET_TOP_READING_ARTICLES_SUCCESS,
  GET_TOP_READING_ARTICLES_FAILURE
} from '../actionTypes';


/**------------------------ actions creator --------------------------------*/

const getTopReadingArticlesSuccess = (articles) => ({
  type: GET_TOP_READING_ARTICLES_SUCCESS,
  payload: articles
});

const getTopReadingArticlesFailure = (errorMsg) => ({
  type: GET_TOP_READING_ARTICLES_FAILURE,
  payload: errorMsg
});

const getTopReadingArticlesLoadingStart = () => ({
  type: GET_TOP_READING_ARTICLES_LOADING_START
});

/**-------------------------- get user articles ------------------------------- */


export const getTopReading = () => async (dispatch) => {
  dispatch(getTopReadingArticlesLoadingStart());
  try {
    const response = await axios.get('/api/articles/top-reading');
    const data = response.data;
    setTimeout(() => {
      dispatch(getTopReadingArticlesSuccess(data));
    }, 2000);
  } catch (error) {

    if (error.response) {
      dispatch(getTopReadingArticlesFailure(error.response.data));
    } else {
      dispatch(getTopReadingArticlesFailure('Something went Wrong !!!'));
    }
  }
};
