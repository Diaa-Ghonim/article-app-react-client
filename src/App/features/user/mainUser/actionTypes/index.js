import { createActionTypes } from '../../../../util/createActionsHelpers';

export const USER_EDIT_INFO = createActionTypes('USER_EDIT_INFO');
export const CLEAR_USER_EDIT_INFO_ERROR = 'CLEAR_USER_EDIT_INFO_ERROR';
export const MAIN_USER_FOLLOW = createActionTypes('MAIN_USER_FOLLOW');
export const MAIN_USER_UNFOLLOW = createActionTypes('MAIN_USER_UNFOLLOW');