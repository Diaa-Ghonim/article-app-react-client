
// import {
//   DELETE_ARTICLE,
//   LIKE_ARTICLE,
//   REMOVE_LIKE_ARTICLE,
//   DISLIKE_ARTICLE,
//   REMOVE_DISLIKE_ARTICLE,
//   SAVE_ARTICLE,
//   REMOVE_SAVE_ARTICLE,
//   CLEAR_ARTICLE_ACTION_ERROR
// } from '../actionTypes';
// import { parseError } from '../../../../util/parseError';

import { createReducer } from "../../../../util/createReducer";
import { handlerErrorActionsForArticle } from "../articleActionsHandler"

const intialState = {
  articleID: '',
  error: null
}
export const articleActionErrorReducer = createReducer(
  intialState, { ...handlerErrorActionsForArticle }
);





// export const articleActionErrorReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case DELETE_ARTICLE.FAILURE:
//     case LIKE_ARTICLE.FAILURE:
//     case REMOVE_LIKE_ARTICLE.FAILURE:
//     case DISLIKE_ARTICLE.FAILURE:
//     case REMOVE_DISLIKE_ARTICLE.FAILURE:
//     case SAVE_ARTICLE.FAILURE:
//     case REMOVE_SAVE_ARTICLE.FAILURE:
//       return {
//         articleId: action.articleId,
//         error: parseError(action.payload)
//       }

//     case CLEAR_ARTICLE_ACTION_ERROR: {
//       return {
//         articleId: '',
//         error: null
//       }
//     }
//     default:
//       return state;
//   }
// }