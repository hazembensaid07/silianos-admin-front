import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrip } from "../../JS/actions/trip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Trip = ({ trip, name, page }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotelReducer.error);
  const clickDelete = (event) => {
    dispatch(deleteTrip(name, page, trip._id));
    if (!error) {
      toast.success("Hotel deleted");
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
              best: trip.best_org,
            },
          }}
        >
          Detail
        </Link>
        <div className="dropdown">
          <a data-bs-toggle="dropdown" className="btn btn-light">
            {" "}
            <i className="material-icons md-more_horiz" />{" "}
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={{ pathname: `/update_trip` }}>
              Edit info
            </Link>
            <button className="dropdown-item text-danger" onClick={clickDelete}>
              Delete
            </button>
          </div>
        </div>{" "}
        {/* dropdown //end */}
      </td>
    </tr>
  );
};
export default Trip;
