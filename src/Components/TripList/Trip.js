import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrip } from "../../JS/actions/trip";
import { toast } from "react-toastify";

import { toggleTrue } from "../../JS/actions/Edit";
import { getTrip } from "../../JS/actions/trip";

import "react-toastify/dist/ReactToastify.min.css";
const Trip = ({ trip, name, page, trips }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotelReducer.error);
  const clickDelete = (event) => {
    if (trips === 1) {
      dispatch(deleteTrip(name, 0, trip._id));
    } else {
      dispatch(deleteTrip(name, page, trip._id));
    }
  };
  return (
    <tr>
      <td>
        <b>{trip.destination}</b>
      </td>
      <td>{trip.price}</td>
      <td>{trip.dates}</td>

      <td className="text-end">
        <Link
          className="btn btn-light"
          to={{
            pathname: `/trip_details`,
            state: {
              id: trip._id,
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
                pathname: `/add_trip`,
                state: { trip: trip },
              }}
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getTrip(trip._id));
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
export default Trip;
