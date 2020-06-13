import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Headers = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="my-active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="my-active" to="/new-post">
              New Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
