import React, { useEffect } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../JS/actions/request";
import Admin from "./Admin";
const AdminList = () => {
  //get global states from redux
  const requests = useSelector((state) => state.request.requests);
  const loadRequests = useSelector((state) => state.request.loadRequests);
  const dispatch = useDispatch();
  useEffect(() => {
    //execute the getrequests method with dispatch
    dispatch(getRequests());
  }, [dispatch]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Demandes de role admin </h2>
          </div>
          <div className="card mb-4">
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="tab-element">Email</th>

                      <th className="text-end "> Action </th>
                    </tr>
                  </thead>
                  {loadRequests && requests.length === 0 && <b>loading</b>}
                  <tbody>
                    {requests.length !== 0 &&
                      requests.map((el) => (
                        <Admin key={el._id} admin={el._id} email={el.email} />
                      ))}
                  </tbody>
                </table>

                {!loadRequests && requests.length === 0 && (
                  <b>Il n'y a pas de demande </b>
                )}
              </div>{" "}
              {/* table-responsive end // */}
            </div>{" "}
            {/* card-body end// */}
          </div>{" "}
          {/* card end// */}
        </section>
      </main>
    </div>
  );
};

export default AdminList;
