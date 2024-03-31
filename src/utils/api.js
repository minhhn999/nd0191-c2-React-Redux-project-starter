import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _login,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function saveQuestion(question) {
    return _saveQuestion(question)
  }

  export function _saveQuestionAnswer(authedUser, qid, answer) {
    return _saveQuestionAnswer({authedUser, qid, answer})
  }

  export function login(username, password) {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
        _login(username,password)
      ]).then(([users, questions, user]) => ({
        users,
        questions,
        user
      }))
  }

  export function saveQuestionAnswer(authedUser, qid, answer) {
    return _saveQuestionAnswer({authedUser, qid, answer})
  }