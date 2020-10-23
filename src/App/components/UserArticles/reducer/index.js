import {
  GET_USER_ARTICLES,
  GET_USER_ARTICLES_LIKED,
  GET_USER_ARTICLES_DISLIKED,
  GET_USER_ARTICLES_SAVED,
  USER_ARTICLES_LOADING_NOW,
  USER_ARTICLES_LOADING_FINISH,
  USER_ARTICLES_ERROR_HAPPEN,
  USER_ARTICLES_NOT_ERROR,
} from '../actionTypes';

import { LIKE_ARTICLE, REMOVE_LIKE_ARTICLE,DELETE_ARTICLE} from '../../Article/actionTypes';
import ArticleEntity from '../../Article/ArticleEntity';

/**
 * i will import user entity to wrap user 
 * 
 * and i will import article entity to wrap article
 */
const intialState = {
  userArticles: [],
  userArticlesLiked: [],
  userArticlesDisliked: [],
  userArticlesSaved: [],
  isLoading: false,
  typeOfState: '',
  error: {
    isError: false,
    msg: '',
  },
};

const helperMapping = (EntityClass, data) => {
  return data.map(d => {
    return new EntityClass(d);
  })
}


export const UserArticlesReducer = (state = intialState, action) => {

  let articleMapped = ''
   let     index = ''
   let    articles = ''
  switch (action.type) {
    case USER_ARTICLES_LOADING_NOW:
      return {
        ...state,
        isLoading: true,
      };

    case USER_ARTICLES_LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      };

    case USER_ARTICLES_ERROR_HAPPEN:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    case USER_ARTICLES_NOT_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' },
      };


    case GET_USER_ARTICLES:
      const userArticlesMapped = helperMapping(ArticleEntity, action.payload).reverse();
      return {
        ...state,
        userArticles: [...userArticlesMapped],
        typeOfState:''
      };

    case LIKE_ARTICLE:
    case REMOVE_LIKE_ARTICLE:
      articleMapped = new ArticleEntity(action.payload);
       index = state.userArticles.findIndex(article => article.id === articleMapped.id);
       articles = state.userArticles.slice();
      articles.splice(index, 1, articleMapped);
      return {...state, userArticles:articles};

    
    case GET_USER_ARTICLES_LIKED:
      const userArticlesLikesMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesLiked: [...userArticlesLikesMapped],
        typeOfState: 'liked',
      };

    case GET_USER_ARTICLES_DISLIKED:
      const userArticlesDislikesMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesDisliked: [...userArticlesDislikesMapped],
        typeOfState: 'disliked',
      };

    case GET_USER_ARTICLES_SAVED:
      const userArticlesSavedMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesSaved: [...userArticlesSavedMapped],
        typeOfState: 'saved',
      };
    
    case DELETE_ARTICLE:
      return {
        ...state,
        userArticles:state.userArticles.filter(article => article.id !== action.payload),
        userArticlesLiked:state.userArticlesLiked.filter(article => article.id !== action.payload),
        userArticlesDisliked:state.userArticlesDisliked.filter(article => article.id !== action.payload),
        userArticlesSaved:state.userArticlesSaved.filter(article => article.id !== action.payload),
      }
    default:
      return state;
  }
}