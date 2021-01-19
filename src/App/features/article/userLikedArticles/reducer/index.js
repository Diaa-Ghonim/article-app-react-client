import { createReducer } from '../../../../util/createReducer';
import { userLikedArticlesHandler } from '../handlers';
import { handlerActionsForArrayOfArticles } from '../../Article/articleActionsHandler';

export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const userLikedArticlesReducer = createReducer(initialState, {
  ...userLikedArticlesHandler,
  ...handlerActionsForArrayOfArticles,
});
