import {
  GET_VOUCHERS_FAIL,
  GET_VOUCHERS_SUCCESS,
  GET_VOUCHERS_LOAD,
  GET_VOUCHER,
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
