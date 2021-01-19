import { GET_USER } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const getUserLoadingStart = createAction(GET_USER.LOADING);
const getUserSuccess = createAction(GET_USER.SUCCESS, 'user');
const getUserFailure = createAction(GET_USER.FAILURE, 'error');

export const getUser = (username) => async (dispatch) => {
  dispatch(getUserLoadingStart());
  try {
    const { data: user } = await axios.get(`/api/users/${username}`);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};
