
import {
  AUTHENTICATE_MAIN_USER_START,
  AUTHENTICATE_MAIN_USER_SUCCESS,
  AUTHENTICATE_MAIN_USER_FAILURE,
  SIGN_SUCCESS,
  SIGN_OUT

} from '../../auth/actionsType';

import {
  USER_EDIT_INFO_SUCCESS,
  USER_EDIT_INFO_FAILURE,
  CLEAR_USER_EDIT_INFO_ERROR,
} from '../actionTypes';


import User from '../../../classes/User';

const initialState = {
  user: {},
  isAuthenticate: false,
  isLoading: false,
  error: {
    isError: false,
    msg: '',
  },
  userEditInfoError: {
    isError: false,
    msg: '',
  }
}

export const mainUserReducer = (state = initialState, action) => {
  let user = '';

  switch (action.type) {
    case AUTHENTICATE_MAIN_USER_START:
      return {
        ...state,
        isLoading: true
      }

    case SIGN_OUT:
      return {
        ...state,
        isAuthenticate: false,
        user: {},

      }

    case AUTHENTICATE_MAIN_USER_SUCCESS:
      user = new User(action.payload);
      return {
        ...state,
        isAuthenticate: true,
        user: user,
        isLoading: false,
        error: { isError: false, msg: '' },
      }
    case AUTHENTICATE_MAIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: { isError: true, msg: action.payload }
      }

    case SIGN_SUCCESS:
      user = new User(action.payload);
      return {
        ...state,
        isAuthenticate: true,
        user: user,
        isLoading: false,
        error: { isError: false, msg: '' },

      }

    case USER_EDIT_INFO_SUCCESS:
      user = new User(action.payload);
      return {
        ...state,
        user: user,
        userEditInfoError: { isError: false, msg: '' }
      };

    case USER_EDIT_INFO_FAILURE:
      return {
        ...state,
        userEditInfoError: { isError: true, msg: action.payload }
      };

    case CLEAR_USER_EDIT_INFO_ERROR: {
      return {
        ...state,
        userEditInfoError: { isError: false, msg: '' }

      }
    }
    default:
      return state;
  }
}