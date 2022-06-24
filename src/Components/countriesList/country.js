import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../../JS/actions/country";
import { toast } from "react-toastify";

import { toggleTrue } from "../../JS/actions/Edit";
import { getCountry } from "../../JS/actions/country";

import "react-toastify/dist/ReactToastify.min.css";
const Country = ({ trip, name, page, trips }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotelReducer.error);
  const clickDelete = (event) => {
    if (trips === 1) {
      dispatch(deleteCountry(name, 0, trip._id));
    } else {
      dispatch(deleteCountry(name, page, trip._id));
    }
  };
  return (
    <tr>
      <td>{trip.name}</td>
      <td className="text-end">
        <Link
          className="btn btn-light"
          to={{
            pathname: `/country_details`,
            state: {
              id: trip.name,
              pictures: trip.pictures,
              best: trip.bestorg,
            },
          }}
        >
          Details
        </Link>
        <div className="dropdown">
          <a data-bs-toggle="dropdown" className="btn btn-light">
            {" "}
            <i className="material-icons md-more_horiz" />{" "}
          </a>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to={{
                pathname: `/add_country`,
                state: { country: trip },
              }}
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getCountry(trip.name));
                console.log(trip)
              }}
            >
              Modifier l'information
            </Link>
            <button className="dropdown-item text-danger" onClick={clickDelete}>
              Supprimer
            </button>
          </div>
        </div>{" "}
        {/* dropdown //end */}
      </td>
    </tr>
  );
};
export default Country;
