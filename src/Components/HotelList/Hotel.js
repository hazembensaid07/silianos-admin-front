import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteHotel, getHotel } from "../../JS/actions/hotel";
import { toast } from "react-toastify";
import { toggleTrue } from "../../JS/actions/Edit";

const Hotel = ({ hotel, name, page, totalchambre, hotels }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotelReducer.error);
  const clickDelete = (event) => {
    if (hotels === 1) {
      dispatch(deleteHotel(name, 0, hotel._id));
    } else {
      dispatch(deleteHotel(name, page, hotel._id));
    }
  };
  return (
    <tr>
      <td>
        <b>{hotel.name}</b>
      </td>
      <td>{hotel.ville}</td>
      {totalchambre > 0 && (
        <td>
          <span className="badge rounded-pill alert-success">Active</span>
        </td>
      )}
      {totalchambre === 0 && (
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
            state: {
              id: hotel._id,
              pictures: hotel.pictures,
              logement: hotel.logement[0],
              prices: hotel.prices,
              hotell: hotel,
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
                pathname: `/add_hotel`,
                state: { hotel: hotel },
              }}
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getHotel(hotel._id));
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

export default Hotel;
