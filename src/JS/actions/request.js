import {
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_LOAD,
} from "../constants/requests";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";
import axios from "axios";
export const getRequests = () => async (dispatch) => {
  dispatch({ type: GET_REQUESTS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(`${apiUri()}/user/get-request`, options);

    dispatch({
      type: GET_REQUESTS_SUCCESS,
      payload: { requests: result.data.result },
    });
  } catch (error) {
    dispatch({ type: GET_REQUESTS_FAIL, payload: error.response.data.error });
  }
};

export const addRequest = (admin) => async (dispatch) => {
  try {
    const _id = admin;
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    await axios.post(`${apiUri()}/user/add-admin`, { _id }, options);
    dispatch(getRequests());
  } catch (error) {
    dispatch({ payload: error.response.data.error });
  }
};
export const deleteRequest = (admin) => async (dispatch) => {
  try {
    const _id = admin;
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    await axios.post(`${apiUri()}/user/delete-admin`, { _id }, options);
    dispatch(getRequests());
  } catch (error) {
    dispatch({
      payload: error.response.data.error,
    });
  }
};
