import React from "react";

const VoucherDeatils = () => {
  return (
    <div>
      {" "}
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Voucher details</h2>
        </div>
        <div className="card">
          <header className="card-header">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="material-icons md-calendar_today" />{" "}
                  <b>Wed, Aug 13, 2020, 4:34PM</b>
                </span>{" "}
                <br />
                <small className="text-muted"> Voucher ID: 3453012</small>
              </div>
              <div className="col-lg-6 col-md-6 ms-auto text-md-end">
                <select
                  className="form-select d-inline-block"
                  style={{ maxWidth: "200px" }}
                >
                  <option>Change status</option>
                  <option>Awaiting payment</option>
                  <option>Confirmed</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
                <a className="btn btn-light" href="#">
                  Save
                </a>
                <a className="btn btn-secondary ms-2" href="#">
                  <i className="icon material-icons md-print" />
                </a>
              </div>
            </div>
          </header>{" "}
          {/* card-header end// */}
          <div className="card-body">
            <div className="row mb-5 order-info-wrap">
              <div className="col-md-4">
                <article className="icontext align-items-start">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-person" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Client </h6>
                    <p className="mb-1">
                      John Alexander <br /> 13640988 <br /> alex@example.com{" "}
                      <br /> +998 99 22123456
                    </p>
                  </div>
                </article>
              </div>{" "}
              {/* col// */}
              <div className="col-md-4">
                <article className="icontext align-items-start">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-local_shipping" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1"> Date d'arrivée </h6>
                    <p className="mb-1">
                      Shipping: Fargo express <br /> Pay method: card <br />{" "}
                      Status: new
                    </p>
                  </div>
                </article>
              </div>{" "}
              {/* col// */}
              <div className="col-md-4">
                <article className="icontext align-items-start">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-place" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Date de Départ </h6>
                    <p className="mb-1">
                      City: Tashkent, Uzbekistan <br />
                      Block A, House 123, Floor 2 <br /> Po Box 10000
                    </p>
                  </div>
                </article>
              </div>{" "}
              {/* col// */}
            </div>{" "}
            {/* row // */}
            <div className="row">
              <div className="col-lg-8">
                <div className="table-responsive">
                  <table className="table border table-hover table-lg">
                    <thead>
                      <tr>
                        <th width="40%">Product</th>
                        <th width="20%">Unit Price</th>
                        <th width="20%">Quantity</th>
                        <th width="20%" className="text-end">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a className="itemside" href="#">
                            <div className="left">
                              <img
                                src="images/items/1.jpg"
                                width={40}
                                height={40}
                                className="img-xs"
                                alt="Item"
                              />
                            </div>
                            <div className="info"> T-shirt blue, XXL size </div>
                          </a>
                        </td>
                        <td> $44.25 </td>
                        <td> 2 </td>
                        <td className="text-end"> $99.50</td>
                      </tr>
                      <tr>
                        <td>
                          <a className="itemside" href="#">
                            <div className="left">
                              <img
                                src="images/items/2.jpg"
                                width={40}
                                height={40}
                                className="img-xs"
                                alt="Item"
                              />
                            </div>
                            <div className="info"> Winter jacket for men</div>
                          </a>
                        </td>
                        <td> $7.50 </td>
                        <td> 2 </td>
                        <td className="text-end"> $15.00</td>
                      </tr>
                      <tr>
                        <td>
                          <a className="itemside" href="#">
                            <div className="left">
                              <img
                                src="images/items/3.jpg"
                                width={40}
                                height={40}
                                className="img-xs"
                                alt="Item"
                              />
                            </div>
                            <div className="info"> Jeans wear for men </div>
                          </a>
                        </td>
                        <td> $43.50 </td>
                        <td> 2 </td>
                        <td className="text-end"> $102.04</td>
                      </tr>
                      <tr>
                        <td>
                          <a className="itemside" href="#">
                            <div className="left">
                              <img
                                src="images/items/4.jpg"
                                width={40}
                                height={40}
                                className="img-xs"
                                alt="Item"
                              />
                            </div>
                            <div className="info">
                              {" "}
                              Product name color and size
                            </div>
                          </a>
                        </td>
                        <td> $99.00 </td>
                        <td> 3 </td>
                        <td className="text-end"> $297.00</td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <article className="float-end">
                            <dl className="dlist">
                              <dt>Subtotal:</dt> <dd>$973.35</dd>
                            </dl>
                            <dl className="dlist">
                              <dt>Shipping cost:</dt> <dd>$10.00</dd>
                            </dl>
                            <dl className="dlist">
                              <dt>Grand total:</dt>{" "}
                              <dd>
                                {" "}
                                <b className="h5">$983.00</b>{" "}
                              </dd>
                            </dl>
                            <dl className="dlist">
                              <dt className="text-muted">Status:</dt>
                              <dd>
                                <span className="badge rounded-pill alert-success text-success">
                                  Payment done
                                </span>
                              </dd>
                            </dl>
                          </article>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* table-responsive// */}
              </div>{" "}
              {/* col// */}
              <div className="col-lg-4">
                <div className="box shadow-sm bg-light">
                  <h6>Payment info</h6>
                  <p>
                    <img
                      src="images/card-brands/2.png"
                      className="border"
                      height={20}
                    />{" "}
                    Master Card **** **** 4768 <br />
                    Business name: Grand Market LLC <br />
                    Phone: +1 (800) 555-154-52
                  </p>
                </div>
                <div className="h-25 pt-4">
                  <div className="mb-3">
                    <label>Notes</label>
                    <textarea
                      className="form-control"
                      name="notes"
                      id="notes"
                      placeholder="Type some note"
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-primary">Save note</button>
                </div>
              </div>{" "}
              {/* col// */}
            </div>
          </div>{" "}
          {/* card-body end// */}
        </div>{" "}
        {/* card end// */}
      </section>
    </div>
  );
};

export default VoucherDeatils;
