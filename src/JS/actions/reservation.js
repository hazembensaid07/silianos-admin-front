import {
    GET_RESERVATIONS_FAIL,
    GET_RESERVATIONS_SUCCESS,
    GET_RESERVATIONS_LOAD,
    GET_RESERVATION,
  } from "../constants/reservation";
  import axios from "axios";
  import { getCookie } from "../../helpers/helper";
  import apiUri from "../../Components/apiUri";
  
  export const getReservations = (prenom, pageNumber) => async (dispatch) => {
    dispatch({ type: GET_RESERVATIONS_LOAD });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.get(
        `${apiUri()}/reservation/search?search=${prenom}&page=${pageNumber}`,
        options
      );
  
      dispatch({
        type: GET_RESERVATIONS_SUCCESS,
        payload: {
          reservations: result.data.response,
          pages: result.data.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_RESERVATIONS_FAIL,
        payload: error.response.data.error,
      });
    }
  };
  export const getVoucher = (id) => async (dispatch) => {
    dispatch({ type: GET_RESERVATIONS_LOAD });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const response = await axios.get(`${apiUri()}/voucher/one/${id}`, options);
  
      dispatch({ type: GET_RESERVATION, payload: response.data.result });
    } catch (error) {
      dispatch({ type: GET_RESERVATIONS_FAIL, payload: error });
    }
  };
  export const deleteVoucher = (prenom, pageNumber, id) => async (dispatch) => {
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
  
      await axios.delete(`${apiUri()}/reservation/delete/${id}`, options);
      dispatch(getReservations(prenom, pageNumber));
    } catch (error) {
      dispatch({
        payload: error,
      });
    }
  };
//   export const validateVoucher = (id) => async (dispatch) => {
//     try {
//       const token = getCookie("token");
//       const options = {
//         headers: { authorization: token },
//       };
  
//       const result = await axios.post(
//         `${apiUri()}/voucher/validate-agency`,
//         { _id: id },
//         options
//       );
//     } catch (error) {
//       dispatch({
//         type: GET_VOUCHERS_FAIL,
//         payload: error.response.data.error,
//       });
//     }
//   };