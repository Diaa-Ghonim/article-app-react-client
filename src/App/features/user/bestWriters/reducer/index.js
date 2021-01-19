import { GET_BEST_WRITERS } from '../actionTypes';
// import User from '../../../classes/User';
import { parseError } from '../../../../util/parseError';

const intialState = {
  bestWriters: [],
  isLoading: false,
  error: null,
};

export const bestWritersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_BEST_WRITERS.LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_BEST_WRITERS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        bestWriters: [...payload.bestWriters],
      };

    case GET_BEST_WRITERS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: parseError(payload.error),
      };

    default:
      return state;
  }
};
