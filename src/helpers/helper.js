import cookie from "js-cookie";
// set in cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};
// remove from cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};
// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
  //store token in cookie
  setCookie("token", response.data.token);
  //store user in local storage
  if (response.data.user.role === "admin") {
    const { user } = response.data;
    user.role = "Cn4CgaPX.uD6@gB5";
    setLocalStorage("user", user);
  } else {
    const { user } = response.data;
    delete user.role;
    setLocalStorage("user", user);
  }
  next();
};
// access user info from localstorage

export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

export const signout = () => {
  removeCookie("token");
  removeLocalStorage("user");
  window.location.href = "/";
};
