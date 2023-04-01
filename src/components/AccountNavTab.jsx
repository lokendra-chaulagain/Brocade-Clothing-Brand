import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import { AiFillEye, AiFillPrinter } from "react-icons/ai";

const AccountNavTab = () => {
  return (
    <div className="container mt-5 px-0">
      <ul
        className="nav nav-pills mb-5 d-flex justify-content-center"
        id="pills-tab"
        role="tablist">
        <li
          className="nav-item mr-5"
          role="presentation">
          <button
            className="nav-link active text-dark"
            id="launchi"
            data-bs-toggle="pill"
            data-bs-target="#launch"
            type="button"
            role="tab">
            Profile
          </button>
        </li>

        <li
          className="nav-item mr-5"
          role="presentation">
          <button
            className="nav-link text-dark"
            id="ordersi"
            data-bs-toggle="pill"
            data-bs-target="#orders"
            type="button"
            role="tab">
            Recent Orders
          </button>
        </li>

        <li
          className="nav-item mr-5"
          role="presentation">
          <button
            className="nav-link text-dark"
            id="dinneri"
            data-bs-toggle="pill"
            data-bs-target="#password"
            type="button"
            role="tab">
            Password
          </button>
        </li>
      </ul>

      <div
        className="tab-content"
        id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="launch"
          role="tabpanel">
          <div className="row my-4">
            <table className="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Lorem, ipsum dolor.</span>

                      <button
                        className="ghostBtn  "
                        data-bs-toggle="modal"
                        data-bs-target="#addressModal">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>lokendra@gmail.com</td>
                </tr>
                {/* 
                <tr>
                  <td>Address</td>
                  <td>Baneshwor 05 Kathmandu Nepal</td>
                </tr> */}

                <tr>
                  <td>Contact Number</td>
                  <td>837434756</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>

        <div
          className="tab-pane fade col-12  col-lg-12"
          id="password"
          role="tabpanel">
          <form>
            <div className="mb-3">
              <h5 className="text-muted text-center mb-3 text-uppercase">Update Password</h5>
              <input
                type="email"
                className="form-control rounded-0 mb-3"
                placeholder="Old Password"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-0 mb-3"
                placeholder="New Password"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-0 mb-3"
                placeholder="Confirm Password"
              />
            </div>

            <button className="myBtn w-100 ">Update</button>
          </form>
        </div>

        <div
          className="tab-pane fade show "
          id="orders"
          role="tabpanel">
          <div className="largeDeviceTable">
            <div className="row my-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#S.N</th>
                    <th scope="col">Payment Mode</th>
                    <th scope="col ">Shipping Charge</th>
                    <th scope="col">Coupon</th>
                    <th scope="col">Sub Total</th>
                    <th scope="col">Total</th>
                    <th scope="col">Order On</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr key={Math.random()}>
                    <th scope="row">{index++}</th>
                    <td>{allorderdata.payment_mode}</td>
                    <td>{allorderdata.shipping_charge}</td>
                    <td> {allorderdata.coupon ? allorderdata.coupon : "N/A"}</td>
                    <td>{allorderdata.sub_total}</td>
                    <td>{allorderdata.total}</td>
                    <td> {moment(allorderdata.createdAt).format("DD-MM-YYYY")}</td>
                    <td>
                      {allorderdata.status == "1" && <span className="badge py-1 bg-danger">Pending</span>}
                      {allorderdata.status == "2" && <span className="badge py-1 bg-info">Review</span>}

                      {allorderdata.status == "3" && <span className="badge py-1 bg-primary">Shipping</span>}
                      {allorderdata.status == "4" && <span className="badge py-1 bg-success">Delivered</span>}
                      {allorderdata.status == "5" && <span className="badge py-1 bg-danger">Cancel</span>}

                      {allorderdata.status == "6" && <span className="badge py-1 bg-info">Refeund Request</span>}

                      {allorderdata.status == "7" && <span className="badge py-1 bg-warning">Refunded</span>}
                    </td>
                    <td>
                      <Link href={{ pathname: "order/[id]", query: { id: allorderdata.order_id } }}>
                        <a className="btn vertical-align-center btn-success btn-xs mt-1">
                          <AiFillEye />
                        </a>
                      </Link>
                      <Link href={{ pathname: "invoice", query: { id: allorderdata.order_id } }}>
                        <a className="btn vertical-align-center mx-1 btn-danger btn-xs mt-1">
                          <AiFillPrinter />
                        </a>
                      </Link>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="smallDeviceTable">
            <div
              className="tab-pane fade show  "
              id="orders"
              role="tabpanel">
              <div className="row my-4   ">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#S.N</th>
                      <th scope="col">Total</th>
                      <th scope="col">Order On</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>65465</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>65465</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>65465</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Address Modal-------- */}
          <div
            className="modal fade"
            id="addressModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            style={{ display: "none", borderRadius: "0 !important" }}
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered rounded-0 border-0">
              <div className="modal-content p-3 position-relative">
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <h5 className="text-muted text-center mb-3 text-uppercase">Update Your Information</h5>
                      <input
                        type="name"
                        className="form-control rounded-0 mb-3"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control rounded-0 mb-3"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control rounded-0 mb-3"
                        placeholder="Address"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control rounded-0 mb-3"
                        placeholder="Contact"
                      />
                    </div>

                    <div class="mb-3">
                      <label
                        htmlFor="formFile"
                        class="form-label">
                        Profile Picture
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </form>
                  <div className="d-flex gap-1">
                    <button className="myBtn flex-fill">Update</button>
                    <button
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="mySecondaryBtn flex-fill">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountNavTab;
