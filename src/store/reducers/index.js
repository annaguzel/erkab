import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import childReducer from "./children";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  children: childReducer,
});
