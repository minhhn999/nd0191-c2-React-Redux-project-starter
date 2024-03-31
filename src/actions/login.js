import { hideLoading, showLoading } from "react-redux-loading-bar";
import { login } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const LOGIN_USER = "LOGIN_USER";
export function loginUser(id) {
  return {
    type: LOGIN_USER,
    id,
  };
}

export function handleLogin(username, password) {
  return (dispatch) => {
    dispatch(showLoading());
    return login(username, password)
      .then(({ users, questions, user }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(loginUser(user.id));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}

