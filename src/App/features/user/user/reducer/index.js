import { createReducer } from '../../../../util/createReducer';
import handlers from '../handlers';

const initialState = {
  user: null,
  isLoading: false,
  isFetched: false,
  error: null,
};

export const userReducer = createReducer(initialState, handlers);
