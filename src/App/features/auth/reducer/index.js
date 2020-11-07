
import {
  SIGN_FAILURE,
  CLEAR_SIGN_ERROR
} from '../actionsType';

const initialState = {
  error: {
    isError: false,
    msg: ''
  }
}

export const signErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_FAILURE:
      return {
        ...state,
        error: { isError: true, msg: action.payload }
      }
    case CLEAR_SIGN_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' }
      }

    default:
      return state;
  }
}