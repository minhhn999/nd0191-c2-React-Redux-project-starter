import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeclassname="active">
            LeaderBoard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeclassname="active">
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
