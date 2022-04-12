import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../helpers/helper";
const UserRoute = ({ component, ...rest }) => {
  if (isAuth()) {
    return <Route {...rest} component={component} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default UserRoute;
