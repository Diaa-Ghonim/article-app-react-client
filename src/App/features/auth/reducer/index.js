import {
  USER_REGISTRATION,
  CLEAR_USER_REGISTRATION_ERROR,
  RESET_AUTH_SUCCESS,
} from '../actionsType';
import { parseError } from '../../../util/parseError';
const initialState = {
  authSuccess: false,
  error: null,
};

export const signErrorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTRATION.FAILURE:
      return {
        ...state,
        error: parseError(payload.error),
      };
    // case USER_REGISTRATION.SUCCESS:
    //   return {
    //     ...state,
    //     authSuccess: true
    //   }
    // case RESET_AUTH_SUCCESS:
    //   return {
    //     ...state,
    //     authSuccess: false
    //   }
    case CLEAR_USER_REGISTRATION_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
