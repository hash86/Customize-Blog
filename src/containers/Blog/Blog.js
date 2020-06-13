import React from "react";
import "./Blog.css";
import Posts from "./Posts";
import { Route, Switch, Redirect } from "react-router-dom";
import Headers from "../../components/Headers";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

const Blog = (props) => {
  return (
    <div>
      <Headers />
      <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={FullPost} />
        <Redirect from="/" to="/posts" exact />
      </Switch>
    </div>
  );
};

export default Blog;
