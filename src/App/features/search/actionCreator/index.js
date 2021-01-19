import { SEARCH } from '../actionType';
import { createAction } from '../../../util/createActionsHelpers';
import axios from '../../../util/axiosConfig';

export const searchLoading = createAction(SEARCH.LOADING);
export const searchSuccess = createAction(SEARCH.SUCCESS, 'items');
export const searchFailure = createAction(SEARCH.FAILURE, 'error');

export const search = (searchString) => async (dispatch) => {
  dispatch(searchLoading());
  try {
    const { data } = await axios.get(`/api/search/${searchString}`);
    console.log(data);
    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
