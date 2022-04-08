import React from "react";
import { Redirect, Route } from "react-router-dom";
const SuperAdminRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");

  /*const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (!token && !isAuth&& isAuth.role!=="admin") {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} component={component} />;
  }*/
};

export default SuperAdminRoute;
