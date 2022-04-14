import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteHotel } from "../../JS/actions/hotel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Hotel = ({ hotel, name, page }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotelReducer.error);
  const clickDelete = (event) => {
    dispatch(deleteHotel(name, page, hotel._id));
    if (!error) {
      toast.success("Hotel deleted");
    }
  };
  return (
    <tr>
      <td>
        <b>{hotel.name}</b>
      </td>
      <td>{hotel.ville}</td>
      {hotel.total_chambre > 0 && (
        <td>
          <span className="badge rounded-pill alert-success">Active</span>
        </td>
      )}
      {hotel.total_chambre === 0 && (
        <td>
          <span className="badge rounded-pill alert-danger">Disabled</span>
        </td>
      )}
      <td>{hotel.etoiles}</td>
      <td className="text-end">
        <Link
          className="btn btn-light"
          to={{
            pathname: `/hotel_details`,
            state: { id: hotel._id, pictures: hotel.pictures },
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
            <Link className="dropdown-item" to={{ pathname: `/update_hotel` }}>
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

export default Hotel;
