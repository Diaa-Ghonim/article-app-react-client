
import { createReducer } from "../../../../util/createReducer";
import { handlerActionsForArrayOfArticles } from "../../Article/articleActionsHandler";
import { userDislikedArticlesHandler } from '../handlers';
export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const userDislikedArticlesReducer = createReducer(initialState, {
  ...userDislikedArticlesHandler, ...handlerActionsForArrayOfArticles
});
