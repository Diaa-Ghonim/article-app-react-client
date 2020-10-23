import {
  GET_USER,
  // GET_USER_ARTICLES,
  // GET_USER_ARTICLES_LIKED,
  // GET_USER_ARTICLES_DISLIKED,
  // GET_USER_ARTICLES_SAVED,
  USER_LOADING_NOW,
  USER_LOADING_FINISH,
  USER_ERROR_HAPPEN,
  USER_NOT_ERROR,
} from '../actionTypes';
import axios from 'axios';

export const getUser = (username) => async (dispatch) => {
  dispatch({ type: USER_LOADING_NOW });

  try {
    const response = await axios.get(`/api/users/${username}`);
    const data = response.data;
    // console.log(response, 'response');
    setTimeout(() => {
      dispatch({ type: USER_LOADING_FINISH });
      dispatch({ type: USER_NOT_ERROR });
      dispatch({ type: GET_USER, payload: data });
    }, 0);
  } catch (error) {
    // console.log(error.reponse, 'response');
    // console.log(error.request, 'response');
    // console.log(error, 'response');

    dispatch({ type: USER_LOADING_FINISH });
    if (error.response) {
      console.log(error.response, 'if');

      dispatch({ type: USER_ERROR_HAPPEN, payload: error.response.data.message });
    } else if (error.request) {
      console.log(error.request, 'else if');

      dispatch({ type: USER_ERROR_HAPPEN, payload: 'Something went wrong !!' });
    } else {
      console.log(error,'else');
      dispatch({ type: USER_ERROR_HAPPEN, payload: 'Something went wrong !!' });
    }
  }
};
/*
export const getUserArticles = (username) => async (dispatch) => {
  dispatch({ type: USER_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/all/${username}`);
    const data = response.data;
    dispatch({ type: USER_LOADING_FINISH });
    dispatch({ type: USER_NOT_ERROR });
    dispatch({ type: GET_USER_ARTICLES, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesLiked = (username) => async (dispatch) => {
  dispatch({ type: USER_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/liked/${username}`);
    const data = response.data;
    dispatch({ type: USER_LOADING_FINISH });
    dispatch({ type: USER_NOT_ERROR });
    dispatch({ type: GET_USER_ARTICLES_LIKED, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesDisliked = (username) => async (dispatch) => {
  dispatch({ type: USER_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/disliked/${username}`);
    const data = response.data;
    dispatch({ type: USER_LOADING_FINISH });
    dispatch({ type: USER_NOT_ERROR });
    dispatch({ type: GET_USER_ARTICLES_DISLIKED, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
export const getUserArticlesSaved = (username) => async (dispatch) => {
  dispatch({ type: USER_LOADING_NOW });

  try {
    const response = await axios.get(`/api/articles/saved/${username}`);
    const data = response.data;
    dispatch({ type: USER_LOADING_FINISH });
    dispatch({ type: USER_NOT_ERROR });
    dispatch({ type: GET_USER_ARTICLES_SAVED, payload: data });
  } catch (error) {
    dispatch({ type: USER_LOADING_FINISH });
    if (error.response) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: error.response.data });
    } else if (error.request) {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    } else {
      dispatch({ type: USER_ERROR_HAPPEN, msg: 'Something went wrong !!' });
    }
  }
};
*/