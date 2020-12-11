
import { createReducer } from "../../../../util/createReducer";
import { handlerActionsForArrayOfArticles } from "../../Article/articleActionsHandler";
import { topReadingArticlesHandler } from "../handlers";

export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const topReadingArticlesReducer = createReducer(initialState, {
  ...topReadingArticlesHandler, ...handlerActionsForArrayOfArticles
});
