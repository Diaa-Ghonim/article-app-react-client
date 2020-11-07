
import { combineReducers } from 'redux'
import { feedReducer } from '../features/feedArticles';
import { bestWritersReducer } from '../features/bestWriters';
import { mainUserReducer } from '../features/mainUser';
import { articleReducer } from '../features/showArticle';
import { topReadingArticlesReducer } from '../features/topReadingArticles';
import { userReducer } from '../features/user';
import { userArticlesReducer } from '../features/userArticles';
import { userLikedArticlesReducer } from '../features/userLikedArticles';
import { userDislikedArticlesReducer } from '../features/userDislikedArticles';
import { userSavedArticlesReducer } from '../features/userSavedArticles';
import { articleActionErrorReducer } from '../shared/Article';
import { signErrorReducer } from '../features/auth';

export default combineReducers({
  feed: feedReducer,
  article: articleReducer,
  topReading: topReadingArticlesReducer,
  user: userReducer,
  bestWriters: bestWritersReducer,
  userArticles: userArticlesReducer,
  userLikedArticles: userLikedArticlesReducer,
  userDislikedArticles: userDislikedArticlesReducer,
  userSavedArticles: userSavedArticlesReducer,
  mainUser: mainUserReducer,
  articleActionError: articleActionErrorReducer,
  signError: signErrorReducer
})