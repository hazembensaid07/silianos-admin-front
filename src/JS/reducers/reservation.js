import {
    GET_RESERVATIONS_FAIL,
    GET_RESERVATIONS_SUCCESS,
    GET_RESERVATIONS_LOAD,
    GET_RESERVATION,
    GET_RESERVATIONS_SUCCESS_BY_HOTEL,
    GET_RESERVATIONS_LOAD_By_HOTEL,
    GET_RESERVATIONS_FAIL_BY_HOTEL,
  } from "../constants/reservation";
  
  const initialstate = {
    reservations: [],
    reservationsByTrip: [],
    loadVouchers: false,
    loadVouchersByHotel: false,
    pages: 0,
    error: null,
    reservation: {},
  };
  
  export const reservationReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_RESERVATIONS_LOAD:
        return { ...state, loadVouchers: true };
      case GET_RESERVATIONS_LOAD_By_HOTEL:
        return { ...state, loadVouchersByHotel: true };
      case GET_RESERVATIONS_SUCCESS:
        return {
          ...state,
          reservations: payload.reservations,
          pages: payload.pages,
          loadVouchers: false,
        };
      case GET_RESERVATIONS_SUCCESS_BY_HOTEL:
        return {
          ...state,
          reservationsByTrip: payload.reservations,
          pages: payload.pages,
          loadVouchersByHotel: false,
        };
      case GET_RESERVATIONS_FAIL:
        return { ...state, loadVouchers: false, errorr: payload };
      case GET_RESERVATIONS_FAIL_BY_HOTEL:
        return { ...state, loadVouchersByHotel: false, errorr: payload };
      case GET_RESERVATION:
        return {
          ...state,
          reservation: payload,
          loadVouchers: false,
        };
      default:
        return state;
    }
  };
  