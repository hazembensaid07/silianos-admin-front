import {
  GET_TRIPS_FAIL,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_LOAD,
  GET_TRIP,
} from "../constants/trips";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";

export const addTrip = (trip, file) => async (dispatch) => {
  const data = new FormData();
  for (const key of Object.keys(file)) {
    data.append("image", file[key]);
  }
  const token = getCookie("token");
  try {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios({
      method: "post",
      url: "https://sylanos.herokuapp.com/api/org/add",
      data: data,
      headers: {
        authorization: token,
        ...trip,
      },
    });

    dispatch(getTrips("", 0));
  } catch (error) {
    dispatch({
      type: GET_TRIPS_FAIL,
      payload: error,
    });
  }
};
export const getTrips = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_TRIPS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `https://sylanos.herokuapp.com/api/org/all/orgs?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_TRIPS_SUCCESS,
      payload: { trips: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_TRIPS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getTrip = (id) => async (dispatch) => {
  dispatch({ type: GET_TRIPS_LOAD });
  try {
    const response = await axios.get(`${apiUri()}/org/${id}`);

    dispatch({ type: GET_TRIP, payload: response.data.result });
  } catch (error) {
    dispatch({ type: GET_TRIPS_FAIL, payload: error });
  }
};
export const deleteTrip = (name, pageNumber, id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    await axios.delete(`${apiUri()}/org/${id}`, options);
    dispatch(getTrips(name, pageNumber));
  } catch (error) {
    dispatch({
      payload: error,
    });
  }
};
