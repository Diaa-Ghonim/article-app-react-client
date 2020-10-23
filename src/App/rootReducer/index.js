
import { combineReducers } from 'redux'
import { ArticleReducer } from '../components/Article/reducer';
import { BestWritersReducer } from '../components/BestWriters/reducer';
import { TopReadingReducer } from '../components/TopReading/reducer';
import {UserReducer } from '../components/User/reducer';
import { UserArticlesReducer } from '../components/UserArticles/reducer';

export default combineReducers({
  articles: ArticleReducer,
  topReading: TopReadingReducer,
  user: UserReducer,
  bestWriters: BestWritersReducer,
  userArticles: UserArticlesReducer
})