import { combineReducers } from 'redux';
import { bestWritersReducer } from '../features/user/bestWriters';
import { mainUserReducer } from '../features/user/mainUser';
import { articleReducer } from '../features/article/showArticle';
import { topReadingArticlesReducer } from '../features/article/topReadingArticles';
import { userReducer } from '../features/user/user';
import { userArticlesReducer } from '../features/article/userArticles';
import { userLikedArticlesReducer } from '../features/article/userLikedArticles';
import { userDislikedArticlesReducer } from '../features/article/userDislikedArticles';
import { userSavedArticlesReducer } from '../features/article/userSavedArticles';
import { articleActionErrorReducer } from '../features/article/Article';
import { signErrorReducer } from '../features/auth';
import { searchReducer } from '../features/search';
import { feedReducer } from '../features/article/feedArticles';

export default combineReducers({
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
  signError: signErrorReducer,
  search: searchReducer,
  feed: feedReducer,
});
