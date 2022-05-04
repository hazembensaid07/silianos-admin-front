import {
  GET_VOUCHERS_FAIL,
  GET_VOUCHERS_SUCCESS,
  GET_VOUCHERS_LOAD,
  GET_VOUCHER,
} from "../constants/vouchers";

const initialstate = {
  vouchers: [],
  loadVouchers: false,
  pages: 0,
  error: null,
  voucher: {},
};

export const voucherReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_VOUCHERS_LOAD:
      return { ...state, loadVouchers: true };
    case GET_VOUCHERS_SUCCESS:
      return {
        ...state,
        vouchers: payload.vouchers,
        pages: payload.pages,
        loadVouchers: false,
      };
    case GET_VOUCHERS_FAIL:
      return { ...state, loadVouchers: false, errorr: payload };
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
