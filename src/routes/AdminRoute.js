import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../helpers/helper";
const AdminRoute = ({ component, ...rest }) => {
  if (isAuth() && isAuth().role === "Cn4CgaPX.uD6@gB5") {
    return <Route {...rest} component={component} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default AdminRoute;
