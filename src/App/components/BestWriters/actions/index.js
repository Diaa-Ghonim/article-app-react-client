
import {
  GET_BEST_WTITERS,
  BEST_WTITERS_LOADING_NOW,
  BEST_WTITERS_LOADING_FINISH,
  BEST_WTITERS_ERROR_HAPPEN,
  BEST_WTITERS_NOT_ERROR,
} from '../actionTypes';
import axios from 'axios';

export const getBestWriters = () => async (dispatch) => {
  dispatch({ type: BEST_WTITERS_LOADING_NOW });
  try {
    const response = await axios.get('/api/users/best-writers');
    // console.log(response);
    const data = response.data;
    setTimeout(() => {
      dispatch({ type: BEST_WTITERS_LOADING_FINISH });
      dispatch({ type: BEST_WTITERS_NOT_ERROR });
      dispatch({ type: GET_BEST_WTITERS, payload: data });
    }, 2000);
  } catch (error) {
    dispatch({
      type: BEST_WTITERS_LOADING_FINISH,
    });
    if (error.response) {
      // console.log(error.response, 'err');
      dispatch({
        type: BEST_WTITERS_ERROR_HAPPEN,
        errorMsg: error.response.data,
      });
    } else if (error.request) {
      console.log(error.request);

      dispatch({
        type: BEST_WTITERS_ERROR_HAPPEN,
        errorMsg: 'Something went Wrong !!!',
      });
    } else {
      console.log(error);

      dispatch({
        type: BEST_WTITERS_ERROR_HAPPEN,
        errorMsg: 'Something went Wrong !!!',
      });
    }
  }
};
