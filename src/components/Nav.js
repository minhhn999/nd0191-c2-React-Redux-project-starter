import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">LeaderBoard</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
