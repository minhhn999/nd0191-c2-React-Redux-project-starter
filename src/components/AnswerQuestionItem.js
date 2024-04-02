import React from "react";

const AnswerQuestionItem = ({
  isAnswered,
  text,
  totalUsers,
  percentageUsers,
  vote,
}) => {
  return (
    <div className="answer-question-option">
      <div className="answer-question-option-text">{text}</div>
      {!isAnswered ? (
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            vote();
          }}
        >
          Click
        </button>
      ) : (
        <div>
          <div>
            Number of people voted: <b>{totalUsers}</b>
          </div>
          <div>
            {" "}
            Percentage of people voted: <b>{percentageUsers}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerQuestionItem;
