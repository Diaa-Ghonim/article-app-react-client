import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  DISLIKE_ARTICLE,
  GET_ARTICLE,
  LIKE_ARTICLE,
  SAVE_ARTICLE,
  SHARE_ARTICLE,
  GET_ARTICLES,
  LOADING_NOW,
  LOADING_FINISH,
  ERROR_HAPPEN,
  NOT_ERROR,
  REMOVE_LIKE_ARTICLE,
} from '../actionTypes';
// import update from 'immutability-helper';

import ArticleEntity from '../ArticleEntity';

export const initialState = {
  article: {},
  articles: [],
  isLoading: false,
  isFetched: false,
  local:null,
  error: {
    isError: false,
    msg: '',
  },
  counter:0
};

export const ArticleReducer = (state = initialState, action) => {
  let article = '';
  let articles = '';
  let articleMapped = '';
  let articlesMapped = '';
  let index = '';

  switch (action.type) {
    case LOADING_NOW:
      return {
        ...state,
        isLoading: true,
      };

    case LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      };

    case NOT_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' },
      };

    case ERROR_HAPPEN:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    case ADD_ARTICLE:
       articleMapped = new ArticleEntity(action.payload);
      return {
        ...state,
        articles:[articleMapped, ...state.articles]
        
      };

    case DELETE_ARTICLE:
       articles = state.articles.filter(article => {
        return article.id !== action.payload
      })
      return { ...state, articles:articles };

    case GET_ARTICLE:
       articleMapped = new ArticleEntity(action.payload);

      return { ...state, article: article };

    case GET_ARTICLES:
       articlesMapped = action.payload.map((article) => {
        return new ArticleEntity(article);
      });
      // console.log(articlesMapped);
      return { ...state, articles: articlesMapped.reverse(), isFetched: true };

    case LIKE_ARTICLE:
    case REMOVE_LIKE_ARTICLE:
      
       articleMapped = new ArticleEntity(action.payload);
      index = state.articles.findIndex(article => article.id === articleMapped.id);
      articles = state.articles.slice();
      articles.splice(index, 1, articleMapped);
      localStorage.setItem('id', '5050')
      return {...state, articles:articles, local:localStorage.getItem('id')};

      
    case DISLIKE_ARTICLE:
      return { ...state };

    case SAVE_ARTICLE:
      return { ...state };

    case SHARE_ARTICLE:
      return { ...state };

    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return { ...state };
  }
};
