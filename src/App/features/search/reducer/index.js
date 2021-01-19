import { parseError } from '../../../util/parseError';
import { SEARCH } from '../actionType';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: payload.items,
      };
    case SEARCH.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: parseError(payload.error),
      };
    default:
      return state;
  }
};
