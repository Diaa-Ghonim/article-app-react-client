import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLE,

  LIKE_ARTICLE,
  REMOVE_LIKE_ARTICLE,

  DISLIKE_ARTICLE,
  REMOVE_DISLIKE_ARTICLE,

  SAVE_ARTICLE,
  REMOVE_SAVE_ARTICLE,

  SHARE_ARTICLE,
  GET_ARTICLES,

  LOADING_NOW,
  LOADING_FINISH,

  ERROR_HAPPEN,
  NOT_ERROR,

  
} from '../actionTypes';

import axios from 'axios';

export const getArticle = ({ username, articleID }) => async (dispatch) => {
  dispatch({
    type: LOADING_NOW,
  });
  // console.log(articleID);
  // const params = { username: username, articleID: articleID };

  try {
    const response = await axios.get(`/api/articles/${username}/${articleID}`);
    const data = response.data;
    setTimeout(() => {
      dispatch({type: LOADING_FINISH});

      dispatch({type: NOT_ERROR});
      dispatch({type: GET_ARTICLE,payload: data});
    }, 5000);
  } catch (error) {
    dispatch({type: LOADING_FINISH});
    if (error.response) {
        
        dispatch({type: ERROR_HAPPEN,payload: error.response.data.message});
    } else if (error.request) {
        
        dispatch({type: ERROR_HAPPEN,payload: 'Something went wrong !!'});
    } else {
        
        dispatch({type: ERROR_HAPPEN,payload: 'Something went wrong !!!'});
    }
  }
  return;
};


export const getArticles = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING_NOW,
  });
  try {
    console.log(getState(), 'get articles');
    const {isAuthenticate} = getState().mainUser;
    let response = null;
    if (isAuthenticate) {
      response = await axios.get('/api/articles/all');
    } else {
      response = await axios.get('/api/articles/common/latest');
    }
    
    const data = response.data;
    setTimeout(() => {
      dispatch({type: LOADING_FINISH});

      dispatch({type: NOT_ERROR});
      dispatch({type: GET_ARTICLES,payload: data});
    },0);
  } catch (error) {
    // console.log(error.toJSON());
    // console.log(error.response, 'from response');
    // console.log(error.request);
    // console.log(error);
dispatch({type: LOADING_FINISH});
    setTimeout(() => {
      if (error.response) {    
        dispatch({ type: ERROR_HAPPEN, payload: error.response.data.message });
      } else if (error.request) {
        dispatch({ type: ERROR_HAPPEN, payload: 'Something went wrong' });
      
      } else {
        dispatch({ type: ERROR_HAPPEN, payload: 'Something went wrong !!!' });
      }
    });
  }
};


export const addArticle = (article) => async (dispatch) => {
  dispatch({type: LOADING_NOW});
  try {
    const response = await axios.post('/api/articles', article);
    console.log(response);
    const data = response.data;
    dispatch({type:LOADING_FINISH})
    dispatch({type:NOT_ERROR})
    dispatch({ type: ADD_ARTICLE, payload: data });
  } catch (error) {
    dispatch({type:LOADING_FINISH})
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const deleteArticle = (articleID) => async (dispatch) => {
  // dispatch({type: LOADING_NOW});
  // const body = { articleID: articleID };
  try {
    const response = await axios.delete('/api/articles/'+articleID);
    const data = response.data;
    console.log(response);
    //  dispatch({type:LOADING_FINISH})
    dispatch({type:NOT_ERROR})
    dispatch({ type: DELETE_ARTICLE, payload: data.deletedID });
  } catch (error) {
    dispatch({type:LOADING_FINISH})
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const likeArticle = (articleID) => async(dispatch) => {
  try {
    const response = await axios.post('/api/articles/like', { articleID });
    const data = response.data;
    console.log(response);
    dispatch({ type: LIKE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const removeLikeArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/remove-like', { articleID });
    const data = response.data;
    console.log(response);
    dispatch({ type: REMOVE_LIKE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const dislikeArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/dislike', { articleID });
    const data = response.data;
    dispatch({ type: DISLIKE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const removeDislikeArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/remove-dislike', { articleID });
    const data = response.data;
    dispatch({ type: REMOVE_DISLIKE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const saveArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/save', { articleID });
    const data = response.data;
    dispatch({ type: SAVE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const removeSaveArticle = (articleID) => async (dispatch) => {
  try {
    const response = await axios.post('/api/articles/remove-save', { articleID });
    const data = response.data;
    dispatch({ type: REMOVE_SAVE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

export const shareArticle = (articleID) => async (dispatch) => {
   try {
    const response = await axios.post('/api/articles/share', { articleID });
    const data = response.data;
    dispatch({ type: SHARE_ARTICLE, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({type: ERROR_HAPPEN, payload: error.response.data})
    } else if(error.request) {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });
    } else {
      dispatch({ type: ERROR_HAPPEN, payload: 'Something wrong happen please try again !!' });

    }
  }
};

/**
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdlMzJhMDMxYjdjMDJmYTBmNDNhMzciLCJfbmFtZSI6InRvYWEiLCJfdXNlcm5hbWUiOiJ0b2FhIiwiX2VtYWlsIjoic29yYUBnbWFpbC5jb20iLCJfcGFzc3dvcmQiOiIkMmIkMTAkV2hjUVQ2SS9CdjdXSy42SVhwbzBpZXNRbS8vandqdS85NW1RUzNBbDF1NHU0bWhSTEhjbVMiLCJfcHJvZkltYWdlIjoiZGVmYXVsdC1pbWFnZS5wbmciLCJfcmF0ZSI6MTIsImlhdCI6MTYwMjEwNjAxNiwiZXhwIjoxNjA1NzA2MDE2fQ.XBAPl8_LYbcE1KTs7AFVB1OdYyUOKggd_ZQLxFHnLHY
 */

export const increment = () => dispatch => {
  dispatch({ type: 'INCREMENT' });
 }