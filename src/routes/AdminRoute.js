import React from "react";
import { Redirect, Route } from "react-router-dom";
const AdminRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");

  /*const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (!token && !isAuth) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} component={component} />;
  }*/
};

export default AdminRoute;
