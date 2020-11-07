

import {
  AUTHENTICATE_MAIN_USER_SUCCESS,
  AUTHENTICATE_MAIN_USER_START,
  AUTHENTICATE_MAIN_USER_FAILURE,
  SIGN_SUCCESS,
  SIGN_FAILURE,
  SIGN_OUT,
  CLEAR_SIGN_ERROR
} from '../actionsType';

import axios from 'axios';


export const signOut = () => ({
  type: SIGN_OUT
})

const authenticateMainUserSuccess = user => ({
  type: AUTHENTICATE_MAIN_USER_SUCCESS,
  payload: user
});

const authenticateMainUserStart = () => ({
  type: AUTHENTICATE_MAIN_USER_START
});

const authenticateMainUserFailure = errorMsg => ({
  type: AUTHENTICATE_MAIN_USER_FAILURE,
  payload: errorMsg
});
const signSuccess = ({ user, token }) => ({
  type: SIGN_SUCCESS,
  payload: user,
  token: token
});
const signFailure = (errorMsg) => ({
  type: SIGN_FAILURE,
  payload: errorMsg
});

export const clearSignError = () => ({
  type: CLEAR_SIGN_ERROR
});


export const authenticateMainUser = () => async (dispatch, getState) => {
  console.log(getState(), 'getState');
  dispatch(authenticateMainUserStart());

  try {
    // throw new Error('something error');
    const response = await axios.get('/api/users/auth');
    const data = response.data;
    console.log(response);
    setTimeout(() => {
      dispatch(authenticateMainUserSuccess(data));
    }, 1000);
  } catch (error) {
    // console.log(error.toJSON());
    if (error.response) {
      dispatch(authenticateMainUserFailure(error.response.data));
    } else {
      dispatch(authenticateMainUserFailure('something went wrong !!!'));
    }
  }
}

export const signIn = ({ email, password }) => async (dispatch, getState) => {
  console.log(getState(), 'getState');
  // dispatch(authenticateMainUserStart());
  try {
    const response = await axios.post('/api/users/signin', {
      email,
      password
    });
    const data = response.data;
    console.log(response);
    setTimeout(() => {
      dispatch(signSuccess(data));
    }, 10000);
  } catch (error) {
    console.log(error.toJSON());
    console.log(error.response)
    if (error.response) {
      if (error.status === 500) {
        dispatch(signFailure(error.response.data.message));
      } else {
        dispatch(signFailure(error.response.data.message));

      }
    } else {
      dispatch(signFailure('something went wrong !!!'));
    }
  }
}

export const signUp = ({ fullname, email, password, dateOfBirth, gender }) => async (dispatch, getState) => {
  console.log(getState(), 'getState');
  // dispatch(authenticateMainUserStart());
  console.log(dateOfBirth);
  try {

    const response = await axios.post('/api/users/signup', {
      fullname,
      email,
      password,
      dateOfBirth,
      gender
    });
    const data = response.data;
    console.log(response);
    setTimeout(() => {
      dispatch(signSuccess(data));
    }, 10000);
  } catch (error) {
    console.log(error.toJSON());
    console.log(error.response);
    if (error.response) {
      dispatch(signFailure(error.response.data.message));
    } else {
      dispatch(signFailure('something went wrong !!!'));
    }
  }
}
