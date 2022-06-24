import {
    GET_COUNTRIES_FAIL,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_LOAD,
    GET_COUNTRY,
  } from "../constants/country";
  
  const initialstate = {
    countries: [],
    loadCountries: false,
    pages: 0,
    error: null,
    country: {},
  };
  
  export const countryReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_COUNTRIES_LOAD:
        return { ...state, loadCountries: true };
      case GET_COUNTRIES_SUCCESS:
        return {
          ...state,
          countries: payload.countries,
          pages: payload.pages,
          loadCountries: false,
        };
      case GET_COUNTRIES_FAIL:
        return { ...state, loadCountries: false, error: payload };
      case GET_COUNTRY:
        return {
          ...state,
          country: payload,
          loadCountries: false,
          error: null,
        };
      default:
        return state;
    }
  };
  