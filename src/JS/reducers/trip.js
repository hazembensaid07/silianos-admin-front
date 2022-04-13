import {
  GET_TRIPS_FAIL,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_LOAD,
  GET_TRIP,
} from "../constants/trips";

const initialstate = {
  trips: [],
  loadTrips: false,
  pages: 0,
  error: null,
  trip: {},
};

export const tripReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_TRIPS_LOAD:
      return { ...state, loadTrips: true };
    case GET_TRIPS_SUCCESS:
      return {
        ...state,
        trips: payload.trips,
        pages: payload.pages,
        loadTrips: false,
      };
    case GET_TRIPS_FAIL:
      return { ...state, loadTrips: false, errorr: payload };
    case GET_TRIP:
      return {
        ...state,
        trip: payload,
        loadTrips: false,
      };
    default:
      return state;
  }
};
