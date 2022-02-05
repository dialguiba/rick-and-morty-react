import { combineReducers } from "redux";
import { apiDataReducer } from "./apiDataReducer";

export const rootReducer = combineReducers({
  api: apiDataReducer,

  // TODO: CAlendarReducer
});
