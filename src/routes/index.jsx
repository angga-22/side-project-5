import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../layout/Search";
import Dashboard from "../layout/Dashboard";
import Histories from "../layout/History";
import Profile from "../layout/Profile";

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/history" exact component={Histories} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
};

export default index;
