import {
  GET_HOTELS_FAIL,
  GET_HOTELS__SUCCESS,
  GET_HOTELS__LOAD,
  GET_HOTEL,
} from "../constants/hotels";

const initialstate = {
  hotels: [],
  loadHotels: false,
  pages: 0,
  error: null,
  hotel: {},
};

export const hotelReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_HOTELS__LOAD:
      return { ...state, loadHotels: true };
    case GET_HOTELS__SUCCESS:
      return {
        ...state,
        hotels: payload.hotels,
        pages: payload.pages,
        loadHotels: false,
      };
    case GET_HOTELS_FAIL:
      return { ...state, loadHotels: false, errorr: payload };
    case GET_HOTEL:
      return {
        ...state,
        hotel: payload,
        loadHotels: false,
      };
    default:
      return state;
  }
};
