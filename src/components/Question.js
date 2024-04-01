import React from "react";
import { formatDate } from "../utils/helpers";

const Question = ({ question }) => {
  if (!question) {
    return null;
  }
  return (
    <div className="question" key={question.id}>
      <h3>{question.author}</h3>
      <span>{formatDate(question.timestamp)}</span>
      <button className="btn">Show</button>
    </div>
  );
};

export default Question;
