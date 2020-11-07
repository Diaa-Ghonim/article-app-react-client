import {
  GET_USER_LOADING_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../actionTypes';
import UserEntity from '../../../classes/User';
const intialState = {
  user: {},
  isLoading: false,
  isFetched: false,
  error: {
    isError: false,
    msg: '',
  },
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };


    case GET_USER_SUCCESS:
      const userMapped = new UserEntity(action.payload);
      return {
        ...state,
        user: userMapped,
        isLoading: false,
        error: { isError: false, msg: '' },
        isFetched: true
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        error: { isError: true, msg: action.payload },

      }
    default:
      return state;
  }
}