import {
    GET_COUNTRIES_FAIL,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_LOAD,
    GET_COUNTRY,
  } from "../constants/country";
  import axios from "axios";
  import { getCookie } from "../../helpers/helper";
  import apiUri from "../../Components/apiUri";
  
  export const getCountries = (name, pageNumber) => async (dispatch) => {
    dispatch({ type: GET_COUNTRIES_LOAD });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.get(
        `${apiUri()}/country?search=${name}&page=${pageNumber}`,
        options
      );
  
      dispatch({
        type: GET_COUNTRIES_SUCCESS,
        payload: { countries: result.data.response, pages: result.data.totalPages },
      });
    } catch (error) {
      dispatch({
        type: GET_COUNTRIES_FAIL,
        payload: error,
      });
    }
  };
  export const deletePhoto = (id, body) => async (dispatch) => {
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.delete(`${apiUri()}/counrty/image`, {body,id}, options);
      dispatch(getCountry(id));
    } catch (error) {
      dispatch({
        type: GET_COUNTRIES_FAIL,
        payload: error.response.data.error,
      });
    }
  };
  
  export const getCountry = (id) => async (dispatch) => {
    dispatch({ type: GET_COUNTRIES_LOAD });
    try {
      const response = await axios.get(`${apiUri()}/country?search=${id}`);
  
      dispatch({ type: GET_COUNTRY, payload: response.data.response[0] });
    } catch (error) {
      dispatch({ type: GET_COUNTRIES_FAIL, payload: error });
    }
  };
  
  export const deleteCountry = (name, pageNumber, id) => async (dispatch) => {
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
  
      await axios.delete(`${apiUri()}/country/delete/${id}`, options);
      dispatch(getCountries(name, pageNumber));
    } catch (error) {
      dispatch({
        payload: error,
      });
    }
  };
  