import { createReducer } from '../../../../util/createReducer';
import { feedHandlers } from '../handlers';
import { handlerActionsForArrayOfArticles } from '../../Article/articleActionsHandler';
export const initialState = {
  articles: [],
  isLoading: false,
  isFetched: false,
  error: null,
};

export const feedReducer = createReducer(initialState, {
  ...feedHandlers,
  ...handlerActionsForArrayOfArticles,
});
