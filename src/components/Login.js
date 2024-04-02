import React, { useEffect, useState } from "react";
import employeePollImage from "../assets/employee_poll.png";
import { connect } from "react-redux";
import { handleLogin } from "../actions/login";
import "./Login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { authedUser, dispatch } = props;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(handleLogin(userName, password));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit && !authedUser) {
      setIsError(true);
    }
  }, [isError, isSubmit, authedUser]);
  return (
    <form className="modal-content animate" onSubmit={handleSubmit}>
      <div className="img-container">
        <img
          src={employeePollImage}
          alt="employee poll"
          className="login-image"
        />
      </div>

      <div className="container">
        {isError && (
          <div className="error-message" data-testid="error-message">
            Incorrect Username or Password. Please retry again!
          </div>
        )}
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
const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser, // Assuming 'authedUser' is in your Redux state
  };
};
export default connect(mapStateToProps)(Login);
