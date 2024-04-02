import React from "react";
import "./AnswerQuestion.css";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AnswerQuestionItem from "./AnswerQuestionItem";
import { handleAnswerQuestion } from "../actions/questions";
const AnswerQuestion = (props) => {
  const { question_id } = useParams();
  const { authedUser, questions, users, dispatch } = props;
  const isAnswered = Object.keys(authedUser.answers).includes(question_id);
  const question = questions[question_id];
  const totalOptionOneUsers = question.optionOne.votes.length;
  const PercentageOptionOneUsers = `${(
    question.optionOne.votes.length / Object.keys(users).length
  ).toFixed(2)} %`;
  const totalOptionTwoUsers = question.optionTwo.votes.length;
  const PercentageOptionTwoUsers = `${(
    (question.optionTwo.votes.length / Object.keys(users).length) *
    100
  ).toFixed(2)} %`;
  const navigate = useNavigate();
  const handleOptionOneClick = async () => {
    try {
      await dispatch(
        handleAnswerQuestion(authedUser.id, question_id, "optionOne"),
      );
      navigate("/");
    } catch (error) {}
  };

  const handleOptionTwoClick = async () => {
    await dispatch(
      handleAnswerQuestion(authedUser.id, question_id, "optionTwo"),
    );
    navigate("/");
  };
  return (
    <div>
      <div className="img-container">
        <h3>Poll by {authedUser.name}</h3>
        <img
          src={authedUser.avatarURL}
          alt="avatar"
          className="answer-question-image"
        />
        <h3>Would You Rather</h3>
      </div>
      <div className="answer-question-content">
        <AnswerQuestionItem
          isAnswered={isAnswered}
          text={question.optionOne.text}
          totalUsers={totalOptionOneUsers}
          percentageUsers={PercentageOptionOneUsers}
          vote={handleOptionOneClick}
        />
        <AnswerQuestionItem
          isAnswered={isAnswered}
          text={question.optionTwo.text}
          totalUsers={totalOptionTwoUsers}
          percentageUsers={PercentageOptionTwoUsers}
          vote={handleOptionTwoClick}
        />
      </div>
    </div>
  );
};
const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    authedUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(AnswerQuestion);
