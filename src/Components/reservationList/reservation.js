import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteVoucher } from "../../JS/actions/reservation";

const Reservation = ({ voucher, cin, page, vouchers }) => {
  const dispatch = useDispatch();

  const clickDelete = (event) => {
    if (vouchers === 1) {
      dispatch(deleteVoucher(cin, 0, voucher._id));
    } else {
      dispatch(deleteVoucher(cin, page, voucher._id));
    }
  };
  return (
    <tr>
      <td>
        <b>{voucher.prenom}</b>
      </td>
      <td>
        <b>{voucher.prenom}</b>
      </td>
      <td>{voucher.cin}</td>
      <td>{voucher.telephone}</td>
      {voucher.checked==="true" && (
        <td>
          <span className="badge rounded-pill alert-success">oui</span>
        </td>
      )}
      {voucher.checked==="false" && (
        <td>
          <span className="badge rounded-pill alert-danger">non</span>
        </td>
      )}
      <td>{voucher.name}</td>
      <td className="text-end">
        <Link
          className="btn btn-light"
          to={{
            pathname: `/reservation_details`,
            state: {
              id: voucher._id,
              rooms: voucher.rooms,
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

export default Reservation;
