import React, { useState } from "react";
import "./NewQuestion.css";
import { connect, useSelector } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const { dispatch } = props;
  const error = useSelector((state) => state.error);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      await dispatch(handleAddQuestion(optionOne, optionTwo));
      console.log("error from submit", error);
      navigate("/")
    } catch(err) {
      console.error(err)
    } 
  };

  return (
    <div className="new-question-container">
      <header className="new-question-container-header">
        <h2>Would You Rather</h2>
        <span>Create Your Own Poll</span>
      </header>
      <form className="new-question-form" onSubmit={handleSubmit}>
        <label htmlFor="option1">
          <b>First Option</b>
        </label>
        <input
          type="text"
          placeholder="Option One"
          name="option1"
          onChange={(e) => setOptionOne(e.target.value)}
        />

        <label htmlFor="option2">
          <b>SecondOption</b>
        </label>
        <input
          type="text"
          placeholder="Option Two"
          name="option2"
          onChange={(e) => setOptionTwo(e.target.value)}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
