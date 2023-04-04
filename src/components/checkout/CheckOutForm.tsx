import Link from "next/link";
import React from "react";
import CheckoutPaymentOption from "./CheckoutPaymentOption";
import { toast } from "react-toastify";
import VerifyPhone from "./VerifyPhone";

export default function CheckOutForm() {
  const optSendSuccess = () => {
    toast.success("OTP Send Success");
  };

  return (
    <div className="col col-lg-7 order-lg-first order-last">
      <CheckoutPaymentOption />
      <hr className="my-5" />

      <>
        <div className="d-flex justify-content-between mb-3">
          <h6 className="h6 text-uppercase">
            <small className="text-muted fw-bold">or continue here</small>
          </h6>

          <h6 className="h6">
            <span className="text-muted">
              Already have an account <Link href="/login">Login</Link>
            </span>
          </h6>
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control rounded-0 "
            placeholder="example@email.com"
          />
        </div>
      </>

      <div className="shipping mt-3">
        <div className="select ">
          <select
            className="form-select rounded-0 mb-3 shadow-none"
            placeholder="Select Area">
            <option value="KTM Outside ring road">KTM Outside ring road</option>
            <option value="koteshwor Area">Koteshwor Area</option>
            <option value="bouddha">Bouddha</option>
            <option value="balaju">Balaju</option>
          </select>
        </div>
        <div className="d-md-flex gap-3 ">
          <div className="w-100 mb-3">
            <input
              type="text"
              className="form-control rounded-0 mb-md-0 w-100"
              placeholder="First Name"
            />
          </div>
          <div className="w-100 mb-3">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="d-md-flex gap-3">
          <div className="w-100  mb-3">
            <input
              type="number"
              className="form-control rounded-0 "
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="d-md-flex gap-3">
          <div className="w-100  mb-3">
            <input
              type="text"
              className="form-control rounded-0 mb-3"
              placeholder="Tole/City"
            />
          </div>
          <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Address"
            />
          </div>
        </div>

        <input
          type="text"
          className="form-control rounded-0 mb-3"
          placeholder="Notes"
        />
        <button
          onClick={optSendSuccess}
          type="submit"
          className="global_black_button w-100">
          Verify Phone number
        </button>

        <button
          type="button"
          className="global_black_button w-100 d-none open_modal"
          data-bs-toggle="modal"
          data-bs-target="#opt_modal">
          {" "}
        </button>
      </div>
      <VerifyPhone />
    </div>
  );
}
