import {
  GET_VOUCHERS_FAIL,
  GET_VOUCHERS_SUCCESS,
  GET_VOUCHERS_LOAD,
  GET_VOUCHER,
  GET_VOUCHERS_SUCCESS_BY_HOTEL,
  GET_VOUCHERS_LOAD_By_HOTEL,
  GET_VOUCHERS_FAIL_BY_HOTEL,
} from "../constants/vouchers";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";

export const getVouchers = (cin, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_VOUCHERS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/voucher/all?search=${cin}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_VOUCHERS_SUCCESS,
      payload: {
        vouchers: result.data.response,
        pages: result.data.totalPages,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getVouchersByHotel =
  (cin, pageNumber, hotel) => async (dispatch) => {
    dispatch({ type: GET_VOUCHERS_LOAD_By_HOTEL });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.get(
        `${apiUri()}/voucher/byhotel/all?search=${cin}&hotel=${hotel}&page=${pageNumber}`,
        options
      );

      dispatch({
        type: GET_VOUCHERS_SUCCESS_BY_HOTEL,
        payload: {
          vouchers: result.data.response,
          pages: result.data.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_VOUCHERS_FAIL,
        payload: error.response.data.error,
      });
    }
  };
export const getPaidVouchers = (cin, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_VOUCHERS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/voucher/paid?search=${cin}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_VOUCHERS_SUCCESS,
      payload: {
        vouchers: result.data.response,
        pages: result.data.totalPages,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getPaidVouchersByhotel =
  (cin, pageNumber, hotel) => async (dispatch) => {
    dispatch({ type: GET_VOUCHERS_LOAD_By_HOTEL });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.get(
        `${apiUri()}/voucher/byhotel/paid?search=${cin}&hotel=${hotel}&page=${pageNumber}`,
        options
      );

      dispatch({
        type: GET_VOUCHERS_SUCCESS_BY_HOTEL,
        payload: {
          vouchers: result.data.response,
          pages: result.data.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_VOUCHERS_FAIL_BY_HOTEL,
        payload: error.response.data.error,
      });
    }
  };
export const getUnpaidVouchers = (cin, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_VOUCHERS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/voucher/unpaid?search=${cin}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_VOUCHERS_SUCCESS,
      payload: {
        vouchers: result.data.response,
        pages: result.data.totalPages,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getUnpaidVouchersByHotel =
  (cin, pageNumber, hotel) => async (dispatch) => {
    dispatch({ type: GET_VOUCHERS_LOAD_By_HOTEL });
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.get(
        `${apiUri()}/voucher/byhotel/unpaid?search=${cin}&hotel=${hotel}&page=${pageNumber}`,
        options
      );

      dispatch({
        type: GET_VOUCHERS_SUCCESS_BY_HOTEL,
        payload: {
          vouchers: result.data.response,
          pages: result.data.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_VOUCHERS_FAIL_BY_HOTEL,
        payload: error.response.data.error,
      });
    }
  };
export const getVoucher = (id) => async (dispatch) => {
  dispatch({ type: GET_VOUCHERS_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const response = await axios.get(`${apiUri()}/voucher/one/${id}`, options);

    dispatch({ type: GET_VOUCHER, payload: response.data.result });
  } catch (error) {
    dispatch({ type: GET_VOUCHERS_FAIL, payload: error });
  }
};
export const deleteVoucher = (cin, pageNumber, id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    await axios.delete(`${apiUri()}/voucher/delete/${id}`, options);
    dispatch(getVouchers(cin, pageNumber));
  } catch (error) {
    dispatch({
      payload: error,
    });
  }
};
export const validateVoucher = (id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    const result = await axios.post(
      `${apiUri()}/voucher/validate-agency`,
      { _id: id },
      options
    );
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const validateVoucherAccompte = (id, accompte) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    const result = await axios.post(
      `${apiUri()}/voucher/validate-acoompte-agency`,
      { _id: id, accompte: accompte },
      options
    );
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const validateVoucherHotel = (id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    const result = await axios.post(
      `${apiUri()}/voucher/validate-hotel`,
      { _id: id },
      options
    );
  } catch (error) {
    dispatch({
      type: GET_VOUCHERS_FAIL,
      payload: error.response.data.error,
    });
  }
};
