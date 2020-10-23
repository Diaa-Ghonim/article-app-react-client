
import {
  GET_TOP_READING,
  TOP_READING_LOADING_NOW,
  TOP_READING_LOADING_FINISH,
  TOP_READING_ERROR_HAPPEN,
  TOP_READING_NOT_ERROR,
} from '../actionType';

import ArticleEntity from '../../Article/ArticleEntity';

const intialState = {
  topReading: [],
  isLoading: false,
  error: {
    isError: false,
    msg: '',
  },
};

export const TopReadingReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOP_READING_LOADING_NOW:
      return {
        ...state,
        isLoading: true,
      };

    case TOP_READING_LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      };

    case GET_TOP_READING:
      const articlesMaped = action.payload.map((article) => {
        return new ArticleEntity(article);
      });
      
      return {
        ...state,
        topReading: articlesMaped,
      };

    case TOP_READING_NOT_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' },
      };

    case TOP_READING_ERROR_HAPPEN:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    default:
      return { ...state };
  }
};
