import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import login from "./login";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
    authedUser: login,
    users,
    questions,
    loadingBar: loadingBarReducer,
  });