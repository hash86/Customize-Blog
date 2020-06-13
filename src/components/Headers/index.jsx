import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
