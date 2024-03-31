import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (

        <nav className=" flex justify-start space-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/leaderboard">LeaderBoard</NavLink>
          <NavLink to="/add">New</NavLink>
        </nav>

  );
};

export default Nav;
