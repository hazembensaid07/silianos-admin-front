import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteVoucher } from "../../JS/actions/voucher";

const Voucher = ({ voucher, cin, page, vouchers }) => {
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
        <b>{voucher.name}</b>
      </td>
      <td>{voucher.Cin}</td>
      <td>{voucher.tel}</td>
      {voucher.paidAgency && (
        <td>
          <span className="badge rounded-pill alert-success">payé</span>
        </td>
      )}
      {!voucher.paidAgency && (
        <td>
          <span className="badge rounded-pill alert-danger">impayé</span>
        </td>
      )}
      <td>{voucher.nomHotel}</td>
      <td className="text-end">
        <Link
          className="btn btn-light"
          to={{
            pathname: `/voucher_details`,
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
            <Link
              className="dropdown-item"
              to={{
                pathname: `/updateVoucher`,
                state: {
                  id: voucher._id,
                },
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

export default Voucher;
