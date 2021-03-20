import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
