import React, { useState } from "react";
import employeePollImage from "../assets/employee_poll.png";
import { connect } from "react-redux";
import { handleLogin } from "../actions/login";
import "./Login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    props.dispatch(handleLogin(userName, password));
  };
  return (
    <form className="modal-content animate" onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src={employeePollImage} alt="employee poll" className="login-image" />
      </div>

      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default connect()(Login);
