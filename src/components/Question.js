import React from "react";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Question = ({ question }) => {
  const navigate = useNavigate();
  if (!question) {
    return null;
  }
  const handleClick = (id) => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="question" key={question.id}>
      <h3>{question.author}</h3>
      <span>{formatDate(question.timestamp)}</span>
      <button className="btn" onClick={() => handleClick(question.id)}>
        Show
      </button>
    </div>
  );
};

export default Question;
