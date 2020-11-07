import {
  USER_EDIT_INFO_SUCCESS,
  USER_EDIT_INFO_FAILURE,
  CLEAR_USER_EDIT_INFO_ERROR
} from '../actionsType';

import axios from 'axios';

const editUserInfoSuccess = (data) => ({
  type: USER_EDIT_INFO_SUCCESS,
  payload: data,
});
const editUserInfoFailure = (errorMsg) => ({
  type: USER_EDIT_INFO_FAILURE,
  payload: errorMsg
})

export const editUserInfo = (userInfo) => async (dispatch) => {
  try {
    const response = await axios.put('/api/users', userInfo);
    const data = response.data;
    dispatch(editUserInfoSuccess(data));
  } catch (error) {
    if (error.response) {
      dispatch(editUserInfoFailure(error.response.data));
    } else {
      dispatch(editUserInfoFailure('Something went wrong !!'));
    }
  }
}
