import { Cookie } from '../../../../libs/cookie';
import { parseError } from '../../../../util/parseError';
import {
  AUTHENTICATE_MAIN_USER,
  SIGN_OUT,
  USER_REGISTRATION,
} from '../../../auth/actionsType';
import {
  CLEAR_USER_EDIT_INFO_ERROR,
  MAIN_USER_FOLLOW,
  MAIN_USER_UNFOLLOW,
  USER_EDIT_INFO,
} from '../actionTypes';

export const mainUserHandlers = {
  [AUTHENTICATE_MAIN_USER.LOADING]: (state, { payload }) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [AUTHENTICATE_MAIN_USER.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      isAuthenticate: true,
      user: user,
      isLoading: false,
      error: null,
    };
  },
  [AUTHENTICATE_MAIN_USER.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      isAuthenticate: false,
      error: parseError(error),
    };
  },
  [USER_REGISTRATION.SUCCESS]: (state, { payload: { user, token } }) => {
    Cookie.set('token', token);
    return {
      ...state,
      isAuthenticate: true,
      user: user,
      isLoading: false,
      error: null,
    };
  },
  [SIGN_OUT]: (state, { payload }) => {
    console.log('Cookie clear');
    Cookie.clear();
    return {
      ...state,
      isAuthenticate: false,
      user: {},
    };
  },
  [USER_EDIT_INFO.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      user: user,
      userEditInfoError: null,
    };
  },
  [USER_EDIT_INFO.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      userEditInfoError: parseError(error),
    };
  },
  [CLEAR_USER_EDIT_INFO_ERROR]: (state, { payload }) => {
    return {
      ...state,
      userEditInfoError: null,
    };
  },
  [MAIN_USER_FOLLOW.SUCCESS]: (state, { payload: { followedUser } }) => {
    const following = [...state.user.following, followedUser];
    return {
      ...state,
      user: { ...state.user, following },
    };
  },

  [MAIN_USER_FOLLOW.FAILURE]: (state, { payload: { error } }) => {
    console.log('follow fail');
    return { ...state };
  },

  [MAIN_USER_UNFOLLOW.SUCCESS]: (state, { payload: { unfollowedUser } }) => {
    const following = state.user.following.filter((followedUser) => {
      return followedUser.username !== unfollowedUser.username;
    });
    return {
      ...state,
      user: { ...state.user, following },
    };
  },
  [MAIN_USER_UNFOLLOW.FAILURE]: (state, { payload: { error } }) => {
    console.log('unfollow fail');
    return { ...state };
  },
};
