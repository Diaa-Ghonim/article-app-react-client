import { createAction } from '../../../util/createActionsHelpers';
import {
  AUTHENTICATE_MAIN_USER,
  USER_REGISTRATION,
  SIGN_OUT,
  CLEAR_USER_REGISTRATION_ERROR,
  RESET_AUTH_SUCCESS,
} from '../actionsType';
import axios from '../../../util/axiosConfig';

export const authenticateMainUserStart = createAction(
  AUTHENTICATE_MAIN_USER.LOADING
);
export const authenticateMainUserSuccess = createAction(
  AUTHENTICATE_MAIN_USER.SUCCESS,
  'user'
);
export const authenticateMainUserFailure = createAction(
  AUTHENTICATE_MAIN_USER.FAILURE,
  'error'
);
export const signOut = createAction(SIGN_OUT);
export const userRegistrationSuccess = createAction(
  USER_REGISTRATION.SUCCESS,
  'user',
  'token'
);
export const userRegistrationSuccessFailure = createAction(
  USER_REGISTRATION.FAILURE,
  'error'
);
export const clearUserRegistrationError = createAction(
  CLEAR_USER_REGISTRATION_ERROR
);
// export const resetAuthSuccess = createAction(RESET_AUTH_SUCCESS);

export const authenticateMainUser = () => async (dispatch) => {
  dispatch(authenticateMainUserStart());
  try {
    // console.log(axios.defaults);
    const { data: user } = await axios.get('/api/users/auth');
    // const response = await fetch('https://article-app-server.herokuapp.com/api/users/auth');
    // console.log(response);
    // const data = await response.json();
    // if (!response.ok) throw new Error(data);

    // console.log(data, 'from auth');
    dispatch(authenticateMainUserSuccess(user));
  } catch (error) {
    // console.log(error);
    dispatch(authenticateMainUserFailure(error));
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const {
      data: { user, token },
    } = await axios.post('/api/auth/signin', {
      email,
      password,
    });
    dispatch(userRegistrationSuccess(user, token));
    dispatch({ type: 'S_SUCCESS' });
  } catch (error) {
    dispatch(userRegistrationSuccessFailure(error));
  }
};

export const signUp = ({
  fullname,
  email,
  password,
  dateOfBirth,
  gender,
}) => async (dispatch) => {
  try {
    const {
      data: { user, token },
    } = await axios.post('/api/auth/signup', {
      fullname,
      email,
      password,
      dateOfBirth,
      gender,
    });
    dispatch(userRegistrationSuccess(user, token));
  } catch (error) {
    dispatch(userRegistrationSuccessFailure(error));
  }
};
