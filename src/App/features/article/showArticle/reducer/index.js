

import { createReducer } from "../../../../util/createReducer";
import { handlerActionsForOneArticle } from "../../Article/articleActionsHandler";
import { articleHandler } from "../handlers";


export const initialState = {
  article: null,
  isLoading: false,
  isFetched: false,
  error: null,
};

export const articleReducer = createReducer(initialState, {
  ...articleHandler, ...handlerActionsForOneArticle
});
