

import { createReducer } from "../../../../util/createReducer";
import { handlerActionsForArrayOfArticles } from "../../Article/articleActionsHandler";
import { userSavedArticlesHandler } from "../handlers";

export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const userSavedArticlesReducer = createReducer(initialState, {
  ...userSavedArticlesHandler, ...handlerActionsForArrayOfArticles
})
