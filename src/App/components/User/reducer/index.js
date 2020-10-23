import {
  GET_USER,
  // GET_USER_ARTICLES,
  // GET_USER_ARTICLES_LIKED,
  // GET_USER_ARTICLES_DISLIKED,
  // GET_USER_ARTICLES_SAVED,
  USER_LOADING_NOW,
  USER_LOADING_FINISH,
  USER_ERROR_HAPPEN,
  USER_NOT_ERROR,
} from '../actionTypes';
import UserEntity from '../UserEntity';
// import ArticleEntity from '../../Article/ArticleEntity';

/**
 * i will import user entity to wrap user 
 * 
 * and i will import article entity to wrap article
 */
const intialState = {
  user: {},
  // userArticles: [],
  // userArticlesLiked: [],
  // userArticlesDisliked: [],
  // userArticlesSaved: [],
  isLoading: false,
  isFetched :false,
  error: {
    isError: false,
    msg: '',
  },
};

// const helperMapping = (EntityClass, data) => {
//   return data.map(d => {
//     return new EntityClass(d);
//   })
// }
export const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case USER_LOADING_NOW:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      };

    case USER_ERROR_HAPPEN:
      return {
        ...state,
        error: { isError: true, msg: action.payload },
      };

    case USER_NOT_ERROR:
      return {
        ...state,
        error: { isError: false, msg: '' },
      };

    case GET_USER:
      const userMapped = new UserEntity(action.payload);
      return {
        ...state,
        user: userMapped,
        isFetched:true
      };
/*
    case GET_USER_ARTICLES:
      const userArticlesMapped = helperMapping(ArticleEntity,action.payload)
      return {
        ...state,
        userArticles: [...userArticlesMapped],
      };

    case GET_USER_ARTICLES_LIKED:
      const userArticlesLikesMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesLikes: [...userArticlesLikesMapped],
      };

    case GET_USER_ARTICLES_DISLIKED:
      const userArticlesDislikesMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesDislikes: [...userArticlesDislikesMapped],
      };

    case GET_USER_ARTICLES_SAVED:
      const userArticlesSavedMapped = helperMapping(ArticleEntity, action.payload);

      return {
        ...state,
        userArticlesSaved: [...userArticlesSavedMapped],
      };
      */
    default:
      return state;
  }
}