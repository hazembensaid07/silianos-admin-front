import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { isAuth, getCookie } from "./helpers/helper";
import apiUri from "./Components/apiUri";
import { Redirect } from "react-router-dom";
import AdminLand from "./Components/AdminLand/AdminLand";
import SignUp from "./Components/SignUp/SignUp";

const Test = ({ history }) => {
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Test;
