import React from "react";
import "./Blog.css";
import Posts from "./Posts";
import { Route } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Route path="/" component={Headers} />
      <Route path="/" exact component={Posts} />
      <Route path="/new-post" render={() => <div>New post</div>} />
    </div>
  );
};

export default Blog;
