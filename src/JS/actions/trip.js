import {
  GET_TRIPS_FAIL,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_LOAD,
  GET_TRIP,
} from "../constants/trips";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";

export const getTrips = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_TRIPS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/org/all/orgs?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_TRIPS_SUCCESS,
      payload: { trips: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TRIPS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const deletePhoto = (id, body) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.post(`${apiUri()}/org/image`, body, options);
    dispatch(getTrip(id));
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