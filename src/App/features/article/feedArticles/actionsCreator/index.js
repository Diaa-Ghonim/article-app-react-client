import { GET_FEED_ARTICLES } from '../actionTypes';
import axios from '../../../../util/axiosConfig';

// this another technique to custom middleware i create it

export const getCommonFeedArticles = () => {
  return {
    types: [
      GET_FEED_ARTICLES.LOADING,
      GET_FEED_ARTICLES.SUCCESS,
      GET_FEED_ARTICLES.FAILURE,
    ],
    shouldCallApi: () => true,
    callAPI: async () => await axios.get('/api/common/articles'),
    payload: {},
  };
};

export const getFeedArticles = () => {
  return {
    types: [
      GET_FEED_ARTICLES.LOADING,
      GET_FEED_ARTICLES.SUCCESS,
      GET_FEED_ARTICLES.FAILURE,
    ],
    shouldCallApi: () => true,
    callAPI: async () => await axios.get('/api/articles'),
    payload: {},
  };
};
