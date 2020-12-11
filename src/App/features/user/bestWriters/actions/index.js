
import { GET_BEST_WRITERS } from '../actionTypes';
import axios from '../../../../util/axiosConfig';
import { createAction } from '../../../../util/createActionsHelpers';

const getBestWritersSuccess = createAction(GET_BEST_WRITERS.SUCCESS, 'bestWriters');
const getBestWritersFailure = createAction(GET_BEST_WRITERS.FAILURE, 'error');
const getBestWritersLoadingStart = createAction(GET_BEST_WRITERS.LOADING);

export const getBestWriters = () => async (dispatch) => {
  dispatch(getBestWritersLoadingStart());
  try {
    const { data: bestWriters } = await axios.get('/api/users/best-writers');
    dispatch(getBestWritersSuccess(bestWriters));
  } catch (error) {
    dispatch(getBestWritersFailure(error));
  }
};
