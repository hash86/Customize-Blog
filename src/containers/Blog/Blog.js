import React from "react";
import "./Blog.css";
import Posts from "./Posts";

const Blog = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <Posts />
    </>
  );
};

export default Blog;
