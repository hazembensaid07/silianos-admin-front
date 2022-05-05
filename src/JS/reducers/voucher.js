import {
  GET_VOUCHERS_FAIL,
  GET_VOUCHERS_SUCCESS,
  GET_VOUCHERS_LOAD,
  GET_VOUCHER,
  GET_VOUCHERS_SUCCESS_BY_HOTEL,
  GET_VOUCHERS_LOAD_By_HOTEL,
  GET_VOUCHERS_FAIL_BY_HOTEL,
} from "../constants/vouchers";

const initialstate = {
  vouchers: [],
  vouchersByHotel: [],
  loadVouchers: false,
  loadVouchersByHotel: false,
  pages: 0,
  error: null,
  voucher: {},
};

export const voucherReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_VOUCHERS_LOAD:
      return { ...state, loadVouchers: true };
    case GET_VOUCHERS_LOAD_By_HOTEL:
      return { ...state, loadVouchersByHotel: true };
    case GET_VOUCHERS_SUCCESS:
      return {
        ...state,
        vouchers: payload.vouchers,
        pages: payload.pages,
        loadVouchers: false,
      };
    case GET_VOUCHERS_SUCCESS_BY_HOTEL:
      return {
        ...state,
        vouchersByHotel: payload.vouchers,
        pages: payload.pages,
        loadVouchersByHotel: false,
      };
    case GET_VOUCHERS_FAIL:
      return { ...state, loadVouchers: false, errorr: payload };
    case GET_VOUCHERS_FAIL_BY_HOTEL:
      return { ...state, loadVouchersByHotel: false, errorr: payload };
    case GET_VOUCHER:
      return {
        ...state,
        voucher: payload,
        loadVouchers: false,
      };
    default:
      return state;
  }
};
