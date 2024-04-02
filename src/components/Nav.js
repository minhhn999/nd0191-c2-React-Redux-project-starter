import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">LeaderBoard</NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">New</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
