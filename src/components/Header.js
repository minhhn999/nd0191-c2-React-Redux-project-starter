import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { logoutUser } from "../actions/login";

const Header = (props) => {
  console.log(props);
  const { avatarURL, dispatch, name } = props;
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex justify-between w-auto py-4">
      <Nav />
      <div className="flex space-x-3">
        <span>
          <img className="w-6 h-6 rounded-full" src={avatarURL} alt="avatar" />{" "}
        </span>
        <span> {name} </span>
        <button onClick={handleLogout}> Logout</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => authedUser;

export default connect(mapStateToProps)(Header);
