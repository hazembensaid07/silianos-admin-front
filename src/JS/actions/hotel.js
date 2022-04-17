import {
  GET_HOTELS_FAIL,
  GET_HOTELS__SUCCESS,
  GET_HOTELS__LOAD,
  GET_HOTEL,
} from "../constants/hotels";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../../Components/apiUri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const addHotel = (hotel, file) => async (dispatch) => {
  const data = new FormData();
  for (const key of Object.keys(file)) {
    data.append("image", file[key]);
  }
  console.log(hotel);
  const token = getCookie("token");
  try {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios({
      method: "post",
      url: "https://sylanos.herokuapp.com/api/hotel/add",
      data: data,
      headers: {
        authorization: token,
        ...hotel,
      },
    });

    dispatch(getHotels("", 0));
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error,
    });
  }
};
export const updateHotel = (hotel, file, id) => async (dispatch) => {
  const data = new FormData();
  const {
    name,
    description,
    ville,
    etoiles,
    logement,
    localisation,
    best_hotel,
    meta_description,
    meta_keywords,
    meta_title,
    price_lpd_adulte,
    price_dp_adulte,
    price_pc_adulte,
    price_all_in_soft_adulte,
    price_all_in_adulte,
    reduction_enfant_2ans,
    reduction_enfant_12ans,
    reduction_enfant_adulte,
    reduction_3_lit,
    reduction_4_lit,
    sup_single,
    sup_suite,
    sup_vue_sur_mer,
    discount,
    family_only,
    total_chambre,
    autres,
    max_chambre,

    reduction_enfant_single,
  } = hotel;
  let hotell = {};
  hotell = {
    name,
    description,
    ville,
    etoiles,
    logement,
    localisation,
    best_hotel,
    meta_description,
    meta_keywords,
    meta_title,
    price_lpd_adulte,
    price_dp_adulte,
    price_pc_adulte,
    price_all_in_soft_adulte,
    price_all_in_adulte,
    reduction_enfant_2ans,
    reduction_enfant_12ans,
    reduction_enfant_adulte,
    reduction_3_lit,
    reduction_4_lit,
    sup_single,
    sup_suite,
    sup_vue_sur_mer,
    discount,
    family_only,
    total_chambre,
    autres,
    max_chambre,

    reduction_enfant_single,
  };
  hotell.id = id;
  for (const key of Object.keys(file)) {
    data.append("image", file[key]);
  }
  console.log(hotell);
  const token = getCookie("token");
  try {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios({
      method: "post",
      url: "https://sylanos.herokuapp.com/api/hotel/update",
      data: data,
      headers: {
        authorization: token,
        ...hotell,
      },
    });

    dispatch(getHotel(id));
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error,
    });
  }
};
export const deletePhoto = (id, body) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.post(
      `${apiUri()}/hotel/remove/photo`,
      body,
      options
    );
    dispatch(getHotel(id));
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const getHotels = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/hotel/all?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_HOTELS__SUCCESS,
      payload: { hotels: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getActivesHotels = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/hotel/active/all?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_HOTELS__SUCCESS,
      payload: { hotels: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getDisabledHotels = (name, pageNumber) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };
    const result = await axios.get(
      `${apiUri()}/hotel/disable/all?search=${name}&page=${pageNumber}`,
      options
    );

    dispatch({
      type: GET_HOTELS__SUCCESS,
      payload: { hotels: result.data.response, pages: result.data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: GET_HOTELS_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const getHotel = (id) => async (dispatch) => {
  dispatch({ type: GET_HOTELS__LOAD });
  try {
    const response = await axios.get(`${apiUri()}/hotel/one/${id}`);

    dispatch({ type: GET_HOTEL, payload: response.data.result });
  } catch (error) {
    dispatch({ type: GET_HOTELS_FAIL, payload: error });
  }
};
export const deleteHotel = (name, pageNumber, id) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { authorization: token },
    };

    await axios.delete(`${apiUri()}/hotel/delete/${id}`, options);
    dispatch(getHotels(name, pageNumber));
  } catch (error) {
    dispatch({
      payload: error,
    });
  }
};
