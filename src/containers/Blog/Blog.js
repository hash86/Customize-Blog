import React from "react";
import "./Blog.css";
import Posts from "./Posts";
import { Route, Switch } from "react-router-dom";
import Headers from "../../components/Headers";
import NewPost from "./NewPost/NewPost";

const Blog = (props) => {
  return (
    <div>
      <Headers />
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </Switch>
    </div>
  );
};

export default Blog;
