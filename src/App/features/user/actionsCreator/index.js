import {
  GET_USER_LOADING_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../actionTypes';
import axios from 'axios';

const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user
});

const getUserFailure = (errorMsg) => ({
  type: GET_USER_FAILURE,
  pauload: errorMsg
});

const getUserLoadingStart = () => ({
  type: GET_USER_LOADING_START
});


export const getUser = (username) => async (dispatch) => {
  dispatch(getUserLoadingStart());

  try {
    const response = await axios.get(`/api/users/${username}`);
    const data = response.data;
    // console.log(response, 'response');
    setTimeout(() => {
      dispatch(getUserSuccess(data));
    }, 0);
  } catch (error) {
    if (error.response) {
      dispatch(getUserFailure(error.response.data.message));
    } else {
      dispatch(getUserFailure('Something went wrong !!'));
    }
  }
};

