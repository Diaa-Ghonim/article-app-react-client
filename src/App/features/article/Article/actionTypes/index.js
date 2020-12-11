import { createActionTypes } from "../../../../util/createActionsHelpers";

export const DELETE_ARTICLE = createActionTypes('DELETE_ARTICLE');
export const LIKE_ARTICLE = createActionTypes('LIKE_ARTICLE');
export const REMOVE_LIKE_ARTICLE = createActionTypes('REMOVE_LIKE_ARTICLE');
export const DISLIKE_ARTICLE = createActionTypes('DISLIKE_ARTICLE');
export const REMOVE_DISLIKE_ARTICLE = createActionTypes('REMOVE_DISLIKE_ARTICLE');
export const SAVE_ARTICLE = createActionTypes('SAVE_ARTICLE');
export const REMOVE_SAVE_ARTICLE = createActionTypes('REMOVE_SAVE_ARTICLE');
export const SHARE_ARTICLE = createActionTypes('SHARE_ARTICLE');

export const CLEAR_ARTICLE_ACTION_ERROR = 'CLEAR_ARTICLE_ACTION_ERROR';
