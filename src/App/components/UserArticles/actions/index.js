import {
  GET_USER_ARTICLES,
  GET_USER_ARTICLES_LIKED,
  GET_USER_ARTICLES_DISLIKED,
  GET_USER_ARTICLES_SAVED,
  USER_ARTICLES_LOADING_NOW,
  USER_ARTICLES_LOADING_FINISH,
  USER_ARTICLES_ERROR_HAPPEN,
  USER_ARTICLES_NOT_ERROR,
} from '../actionTypes';
import axios from 'axios';


export const getUserArticles = (username) => async (dispatch) => {
  dispatch({ type: USER_ARTICLES_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/all/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch({ type: USER_ARTICLES_LOADING_FINISH });
      dispatch({ type: USER_ARTICLES_NOT_ERROR });
      dispatch({ type: GET_USER_ARTICLES, payload: data });
    }, 0);
  } catch (error) {
    dispatch({ type: USER_ARTICLES_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesLiked = (username) => async (dispatch) => {
  dispatch({ type: USER_ARTICLES_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/liked/${username}`);
    const data = response.data;
    // console.log(response);

   setTimeout(() => {
      dispatch({ type: USER_ARTICLES_LOADING_FINISH });
      dispatch({ type: USER_ARTICLES_NOT_ERROR });
      dispatch({ type: GET_USER_ARTICLES_LIKED, payload: data });
   }, 0);
  } catch (error) {
    dispatch({ type: USER_ARTICLES_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesDisliked = (username) => async (dispatch) => {
  dispatch({ type: USER_ARTICLES_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/disliked/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch({ type: USER_ARTICLES_LOADING_FINISH });
      dispatch({ type: USER_ARTICLES_NOT_ERROR });
      dispatch({ type: GET_USER_ARTICLES_DISLIKED, payload: data });
    }, 0);
  } catch (error) {
    dispatch({ type: USER_ARTICLES_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesSaved = (username) => async (dispatch) => {
  dispatch({ type: USER_ARTICLES_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/saved/${username}`);
    const data = response.data;
    setTimeout(() => {
      dispatch({ type: USER_ARTICLES_LOADING_FINISH });
      dispatch({ type: USER_ARTICLES_NOT_ERROR });
      dispatch({ type: GET_USER_ARTICLES_SAVED, payload: data });
    }, 0);
  } catch (error) {
    dispatch({ type: USER_ARTICLES_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ARTICLES_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
