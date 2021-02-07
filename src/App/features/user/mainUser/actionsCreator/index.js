import {
  USER_EDIT,
  // CLEAR_USER_EDIT_INFO_ERROR,
  MAIN_USER_FOLLOW,
  MAIN_USER_UNFOLLOW,
} from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const editUserSuccess = createAction(USER_EDIT.SUCCESS, 'user');
const editUserFailure = createAction(USER_EDIT.FAILURE, 'error');
const mainUserFollowSuccess = createAction(
  MAIN_USER_FOLLOW.SUCCESS,
  'followedUser'
);
const mainUserFollowFailure = createAction(MAIN_USER_FOLLOW.FAILURE, 'error');
const mainUserUnfollowSuccess = createAction(
  MAIN_USER_UNFOLLOW.SUCCESS,
  'unfollowedUser'
);
const mainUserUnfollowFailure = createAction(
  MAIN_USER_UNFOLLOW.FAILURE,
  'error'
);

export const editUser = (user) => async (dispatch) => {
  try {
    const { data: User } = await axios.put('/api/users', user);
    dispatch(editUserSuccess(User));
  } catch (error) {
    dispatch(editUserFailure(error));
  }
};

export const followUser = (followedUsername) => async (dispatch) => {
  try {
    const { data: followedUser } = await axios.post('/api/users/follow', {
      followedUsername,
    });
    dispatch(mainUserFollowSuccess(followedUser));
  } catch (error) {
    dispatch(mainUserFollowFailure(error));
  }
};

export const unfollowUser = (unfollowedUsername) => async (dispatch) => {
  console.log(unfollowedUsername);
  try {
    const { data: unfollowedUser } = await axios.post('/api/users/unfollow', {
      unfollowedUsername,
    });
    dispatch(mainUserUnfollowSuccess(unfollowedUser));
  } catch (error) {
    dispatch(mainUserUnfollowFailure(error));
  }
};
