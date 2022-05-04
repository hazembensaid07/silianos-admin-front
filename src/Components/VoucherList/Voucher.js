import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteVoucher, getVoucher } from "../../JS/actions/voucher";

const Voucher = ({ voucher, cin, page }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.voucherReducer.error);
  const clickDelete = (event) => {
    dispatch(deleteVoucher(cin, page, voucher._id));
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
          <span className="badge rounded-pill alert-success">paid</span>
        </td>
      )}
      {!voucher.paidAgency && (
        <td>
          <span className="badge rounded-pill alert-danger">unpaid</span>
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
                state: { id: voucher._id },
              }}
            >
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

export default Voucher;
