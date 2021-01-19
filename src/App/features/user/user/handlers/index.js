import { parseError } from '../../../../util/parseError';
import { GET_USER } from '../actionTypes';

export default {
  [GET_USER.LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_USER.SUCCESS]: (state, { payload: { user } }) => {
    return {
      ...state,
      user: user,
      isLoading: false,
      error: null,
      isFetched: true,
    };
  },

  [GET_USER.FAILURE]: (state, { payload: { error } }) => {
    return {
      ...state,
      isLoading: false,
      error: parseError(error),
    };
  },
};
