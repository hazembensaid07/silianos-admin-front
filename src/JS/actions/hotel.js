import {
  GET_HOTELS_FAIL,
  GET_HOTELS__SUCCESS,
  GET_HOTELS__LOAD,
  GET_HOTEL,
} from "../constants/hotels";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";
export const getHotels = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/hotel/all?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_HOTELS__SUCCESS,
      payload: { hotels: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getHotel = (id) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const response = await axios.get(`${apiUri()}/hotel/one/${id}`);

    dispatch({ type: GET_HOTEL, payload: response.data.result });
  } catch (error) {
    dispatch({ type: GET_HOTELS_FAIL, payload: error });
  }
};
export const deleteHotel = (name, pageNumber, id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    await axios.delete(`${apiUri()}/hotel/delete/${id}`, options);
    dispatch(getHotels(name, pageNumber));
  } catch (error) {
    dispatch({
      payload: error,
    });
  }
};
