import { createActionTypes } from '../../../util/createActionsHelpers';

export const AUTHENTICATE_MAIN_USER = createActionTypes(
  'AUTHENTICATE_MAIN_USER'
);
export const USER_REGISTRATION = createActionTypes('USER_REGISTRATION');
export const SIGN_OUT = 'SIGN_OUT';
export const CLEAR_USER_REGISTRATION_ERROR = 'CLEAR_USER_REGISTRATION_ERROR';
export const RESET_AUTH_SUCCESS = 'RESET_AUTH_SUCCESS';
