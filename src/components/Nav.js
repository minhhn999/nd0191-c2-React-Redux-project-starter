import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between w-auto py-4">
        <nav className=" flex justify-start space-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/leaderboard">LeaderBoard</NavLink>
          <NavLink to="/add">New</NavLink>
        </nav>
        <div className="flex space-x-3">
          <span>
            {" "}
            <img
              className="w-6 h-6 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Liu_Yifei_at_the_2016_BAZAAR_Stars%E2%80%99_Charity_Night.jpg"
              alt="avatar"
            />{" "}
          </span>
          <span> username </span>
          <button> Logout</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
