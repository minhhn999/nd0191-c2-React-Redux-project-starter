import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { logoutUser } from "../actions/login";
import "./Header.css";

const Header = (props) => {
  console.log(props);
  const { avatarURL, dispatch, name } = props;
  console.log(avatarURL);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <div className="header-container">
        <Nav />
        <div className="account">
          <span>
            <img className="avatar" src={avatarURL} alt="avatar" />
          </span>
          <span> {name} </span>
          <button onClick={handleLogout}> Logout</button>
        </div>
      </div>
      <hr />
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({ ...authedUser });

export default connect(mapStateToProps)(Header);
