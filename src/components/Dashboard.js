import React from "react";
import { connect } from "react-redux";
import "./Dashboard.css";
import Question from "./Question";

const Dashboard = (props) => {
  const { authedUser, questions } = props;
  const questionsAnsweredKeys = Object.keys(questions).filter((x) =>
    Object.keys(authedUser.answers).includes(x),
  );
  const questionsAnswered = questionsAnsweredKeys.map((x) => questions[x]);
  const questionsUnAnsweredKeys = Object.keys(questions).filter(
    (x) => !Object.keys(authedUser.answers).includes(x),
  );
  const questionsUnAnswered = questionsUnAnsweredKeys.map((x) => questions[x]);

  // console.log("questionsAnsweredKeys", questionsAnsweredKeys);
  // console.log("authedUser", Object.keys(authedUser.answers));

  // console.log(questionsAnswered);
  // console.log(questionsUnAnswered);

  return (
    <div>
      <div className="question-container">
        <h2>New Questions</h2>
        <hr />
        <div className="question-info">
          {questionsUnAnswered.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      <div className="question-container">
        <h2>Done</h2>
        <hr />
        <div className="question-info">
          {questionsAnswered.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Dashboard);
