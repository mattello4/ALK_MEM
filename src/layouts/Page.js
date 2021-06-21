import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HotPage from "../pages/HotPage";
import RegularPage from "../pages/RegularPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hot" exact component={HotPage} />
        <Route path="/regular" exact component={RegularPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
