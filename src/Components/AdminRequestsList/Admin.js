import React from "react";
import { addRequest, deleteRequest } from "../../JS/actions/request";
import { useDispatch } from "react-redux";
const Admin = ({ admin, email }) => {
  const dispatch = useDispatch();
  const clickSubmit = (event) => {
    dispatch(addRequest(admin));
  };
  const clickDelete = (event) => {
    dispatch(deleteRequest(admin));
  };

  return (
    <tr>
      <td>
        <b>{email}</b>
      </td>

      <td className="text-end">
        <button className="btn  text-success" onClick={clickSubmit}>
          Accept
        </button>
        <button className="btn text-danger" onClick={clickDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Admin;
