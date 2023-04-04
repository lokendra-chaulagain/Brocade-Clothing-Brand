import React from "react";
import { AiFillEye, AiFillPrinter } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AccountNavTab = () => {
  const updateSuccess = () => toast.success("Update Success");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const updateHandler = async () => {
    console.log(handleAllField);
    updateSuccess();
    reset();
  };
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
            className="nav-link active text-dark global_black_button"
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
            className="nav-link text-dark global_black_button"
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
                  <td>Full Name</td>
                  <td>Lokendra Chaulagain</td>
                </tr>

                <tr>
                  <td>Email</td>
                  <td>lokendrachaulagain803@gmail.com</td>
                </tr>

                <tr>
                  <td>Address</td>
                  <td>Baneshwor 05 Kathmandu Nepal</td>
                </tr>

                <tr>
                  <td>Contact </td>
                  <td>986354734535</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>

        <div
          className="tab-pane fade col-12  col-lg-12"
          id="password"
          role="tabpanel">
          <form onSubmit={handleSubmit(updateHandler)}>
            <div className="mb-3">
              <h5 className="text-muted text-center mb-3 text-uppercase">Update Password</h5>
              <input
                type="text"
                className="form-control rounded-0 "
                placeholder="Old Password"
                id="oldPassword"
                {...register("oldPassword", { required: true })}
              />
              {errors.oldPassword && <span className="text-danger">This field is required</span>}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-0 "
                placeholder="New Password"
                id="newPassword"
                {...register("newPassword", { required: true })}
              />
              {errors.newPassword && <span className="text-danger">This field is required</span>}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-0 "
                placeholder="Confirm Password"
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && <span className="text-danger ">This field is required</span>}
            </div>

            <button
              type="submit"
              className="global_black_button w-100 ">
              Update
            </button>
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
                    <th scope="col">S.N</th>
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
                  <tr>
                    <th scope="row">7</th>
                    <td>mode</td>
                    <td>charge</td>
                    <td> 44</td>
                    <td>44</td>
                    <td>44</td>
                    <td> 44</td>
                    <td>
                      <span className="badge py-1 bg-danger cursor-pointer no_selection">Pending</span>
                    </td>
                    <td className="d-flex gap-1">
                      <div className="d-flex align-items-center justify-content-center p-2 bg-warning rounded-2 cursor-pointer">
                        <AiFillEye color="white" />
                      </div>

                      <div className="d-flex align-items-center justify-content-center p-2 bg-danger rounded-2 cursor-pointer">
                        <AiFillPrinter color="white" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="smallDeviceTable d-block d-md-none ">
            <div
              className="tab-pane fade show  "
              id="orders"
              role="tabpanel">
              <div className="row my-4   ">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.N</th>
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
        </div>
      </div>
    </div>
  );
};

export default AccountNavTab;
