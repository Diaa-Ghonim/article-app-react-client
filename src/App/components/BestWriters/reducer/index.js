import {
  GET_BEST_WTITERS,
  BEST_WTITERS_LOADING_NOW,
  BEST_WTITERS_LOADING_FINISH,
  BEST_WTITERS_ERROR_HAPPEN,
  BEST_WTITERS_NOT_ERROR,
} from '../actionTypes';
import UserEntity from '../../User/UserEntity';

const intialState = {
  bestWriters: [],
  isLoading: false,
  error: {
    isError: false,
    msg: '',
  },
};

export const BestWritersReducer = (state = intialState, action) => {
  switch (action.type) {
    case BEST_WTITERS_LOADING_NOW:
      return {
        ...state,
        isLoading: true,
      };
    case BEST_WTITERS_LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      };
    case BEST_WTITERS_ERROR_HAPPEN:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };
    case BEST_WTITERS_NOT_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' },
      };
    case GET_BEST_WTITERS:
      const bestWritersMapped = action.payload.map(bestWriter => {
        return new UserEntity(bestWriter);
      })
      return {
        ...state,
        bestWriters: [...bestWritersMapped],
      };

    default:
      return state;
  }
};
