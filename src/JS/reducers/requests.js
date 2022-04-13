import {
  GET_REQUESTS_FAIL,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_LOAD,
} from "../constants/requests";

const initialstate = {
  requests: [],
  loadRequests: false,

  error: null,
};

export const request = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_REQUESTS_LOAD:
      return { ...state, loadRequests: true };
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: payload.requests,
        loadRequests: false,
      };
    case GET_REQUESTS_FAIL:
      return { ...state, loadRequests: false, error: payload };

    default:
      return state;
  }
};
