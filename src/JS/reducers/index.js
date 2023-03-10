import { combineReducers } from "redux";
import { request } from "./requests";
import { hotelReducer } from "./hotels";
import { tripReducer } from "./trip";
import { editReducer } from "./Edit";
import { voucherReducer } from "./voucher";
import { countryReducer } from "./country";
import { reservationReducer } from './reservation';

export const rootReducer = combineReducers({
  request,
  hotelReducer,
  tripReducer,
  editReducer,
  voucherReducer,
  countryReducer,
  reservationReducer
});
