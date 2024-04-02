import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

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

function answerQuestion() {
  return {
    type: ANSWER_QUESTION,
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
      .catch(error => {
        console.error(error)
        throw Error(error)
      })
      .finally(() => {
        dispatch(hideLoading())
      })
  };
}
export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(dispatch(answerQuestion))
      .catch((error) => console.error(error))
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}
