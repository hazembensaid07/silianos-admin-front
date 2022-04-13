import { combineReducers } from "redux";
import { request } from "./requests";
import { hotelReducer } from "./hotels";
import { tripReducer } from "./trip";
export const rootReducer = combineReducers({
  request,
  hotelReducer,
  tripReducer,
});
