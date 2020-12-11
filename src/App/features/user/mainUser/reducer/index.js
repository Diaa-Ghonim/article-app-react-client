import { createReducer } from "../../../../util/createReducer";
import { mainUserHandlers } from "../handlers";

const initialState = {
  user: {},
  isAuthenticate: false,
  isLoading: false,
  error: null,
  userEditInfoError: null
}

export const mainUserReducer = createReducer(initialState, { ...mainUserHandlers });
