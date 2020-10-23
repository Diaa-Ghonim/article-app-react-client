import axios from 'axios';

import {
  GET_TOP_READING,
  TOP_READING_LOADING_NOW,
  TOP_READING_LOADING_FINISH,
  TOP_READING_ERROR_HAPPEN,
  TOP_READING_NOT_ERROR,
} from '../actionType';

export const getTopReading = () => async (dispatch) => {
  dispatch({ type: TOP_READING_LOADING_NOW });
  try {
    const response = await axios.get(
      '/api/articles/top-reading'
    );
    // console.log(response);
    const data = response.data;
    setTimeout(() => {
      dispatch({ type: TOP_READING_LOADING_FINISH });
      dispatch({ type: TOP_READING_NOT_ERROR });
      dispatch({ type: GET_TOP_READING, payload: data });
    }, 2000);
  } catch (error) {
    dispatch({
      type: TOP_READING_LOADING_FINISH,
    });
    if (error.response) {
      // console.log(error.response, 'err');
      dispatch({
        type: TOP_READING_ERROR_HAPPEN,
        errorMsg: error.response.data,
      });
    } else if (error.request) {
      console.log(error.request);

      dispatch({
        type: TOP_READING_ERROR_HAPPEN,
        errorMsg: 'Something went Wrong !!!',
      });
    } else {
      console.log(error);

      dispatch({
        type: TOP_READING_ERROR_HAPPEN,
        errorMsg: 'Something went Wrong !!!',
      });
    }
  }
};
