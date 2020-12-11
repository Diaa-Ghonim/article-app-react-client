
import { createReducer } from "../../../../util/createReducer";
import { handlerActionsForArrayOfArticles } from "../../Article/articleActionsHandler";
import { userArticlesHandler } from "../handlers";

export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const userArticlesReducer = createReducer(initialState, {
  ...userArticlesHandler, ...handlerActionsForArrayOfArticles
});
