import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers } from "./users";
import { getAuthedUser } from "./login";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion(users, questions) {
  return {
    type: ANSWER_QUESTION,
    users,
    questions,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    })
      .then((question) => dispatch(addQuestion(question)))
      .catch((error) => {
        console.error(error);
        throw Error(error);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}
export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then((users, questions) => {
        dispatch(answerQuestion);
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(getAuthedUser(users, authedUser));
      })
      .catch((error) => {
        throw Error(error);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}
