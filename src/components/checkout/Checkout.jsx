import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Cartitem from "../navBar/Cartitem";
import CheckoutPaymentOption from "./CheckoutPaymentOption";
import API from "../../services/Api.js";
import CartitemContext from "../../services/context/cartContext";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import SendOtp from "../../services/sendOtp";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  watch();
  let router = useRouter();

  return (
    <div className="container ">
      <form
        action=""
        method="post"
        // onSubmit={handleSubmit(PlaceOrder)}
      >
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
          <div className="col col-lg-7 order-lg-first order-last">
            <CheckoutPaymentOption />
            <hr className="my-5" />

            <>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="h6 text-uppercase">
                  <small className="text-muted fw-bold">or continue here</small>
                </h6>
                {!token && (
                  <h6 className="h6">
                    <span className="text-muted">
                      Already have an account <Link href="/login">Login</Link>
                    </span>
                  </h6>
                )}
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required field and type must be email",
                  })}
                  className="form-control rounded-0 "
                  placeholder="example@email.com"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </div>
              <input
                type="checkbox"
                className="mb-3 me-2"
                name="agree"
                id="agree"
                value="1"
                onChange={(e) => setData({ ...data, subscribe: data.subscribe ? 0 : 1 })}
                checked={data.subscribe}
              />
              <label htmlFor="agree">Send me some offers .</label>
            </>

            <div className="shipping mt-3">
              <div className="select">
                <select
                  className="form-select rounded-0 mb-3"
                  placeholder="select one"
                  {...register("main_area", {
                    required: "This is required field",
                  })}
                  onChange={(e) => setData({ ...data, main_area: e.target.value })}>
                  <option value="KTM Outside ring road">KTM Outside ring road</option>
                  <option value="Koteshor Area">Koteshor Area</option>
                  <option value="Budhanilkantha">Budhanilkantha</option>
                  <option value="Balaju">Balaju</option>
                </select>
                {errors.main_area && <small className="text-danger">{errors.main_area.message}</small>}
              </div>
              <div className="d-md-flex gap-3 ">
                <div className="w-100 mb-3">
                  <input
                    type="text"
                    {...register("first_name", {
                      required: "First N ame is required field",
                    })}
                    className="form-control rounded-0 mb-md-0 w-100"
                    placeholder="First Name"
                    onChange={(e) => setData({ ...data, first_name: e.target.value })}
                    value={data.first_name}
                  />

                  {errors.first_name && <small className="text-danger">{errors.first_name.message}</small>}
                </div>
                <div className="w-100 mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Last Name"
                    onChange={(e) => setData({ ...data, last_name: e.target.value })}
                    value={data.last_name}
                  />
                </div>
              </div>

              <div className="d-md-flex gap-3">
                <div className="w-100  mb-3">
                  <input
                    type="number"
                    {...register("phone", {
                      required: "Phone is required field",
                      minLength: 10,
                      maxLength: 10,
                    })}
                    className="form-control rounded-0 "
                    placeholder="Phone"
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    value={data.phone}
                  />

                  {errors.phone && <small className="text-danger">{errors.phone.message}</small>}

                  {errors.phone?.type === "minLength" && (
                    <p>
                      <small className="text-danger">Must be at least 10 digit long</small>
                    </p>
                  )}
                  {errors.phone?.type === "maxLength" && (
                    <p>
                      <small className="text-danger">Must not be more than 10 digit long</small>
                    </p>
                  )}
                </div>

                <div className="w-100  mb-3">
                  <Select
                    options={options}
                    className="w-100 "
                    onChange={handleChange}
                    placeholder="Select Area"
                    styles={{ borderRadius: "0 !important" }}
                  />
                </div>
              </div>
              <div className="d-md-flex gap-3">
                <div className="w-100  mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0 mb-3"
                    placeholder="Tole/City"
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    value={data.city}
                  />
                </div>
                <div className="mb-3 w-100">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    {...register("address", {
                      required: "Address is required field",
                    })}
                    placeholder="Address"
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                    value={data.address}
                  />
                  {errors.address && <small className="text-danger">{errors.address.message}</small>}
                </div>
              </div>

              <input
                type="text"
                className="form-control rounded-0 mb-3"
                placeholder="Notes"
                onChange={(e) => setData({ ...data, notes: e.target.value })}
                value={data.notes}
              />
              {!token && <button className="global_black_button w-100">Verify Phone number</button>}

              <button
                type="button"
                className="global_black_button w-100 d-none open_modal"
                data-bs-toggle="modal"
                data-bs-target="#opt_modal"></button>
            </div>
          </div>

          <div className="col col-lg-5">
            <h6 className="h6 text-uppercase">
              <small className="text-muted fw-bold">your products</small>
            </h6>
            <Cartitem iscouponapplied={coupon.isapplied} />
            <div className="text-right border-top mt-4 py-4">
              <div>
                <div className="form-group border-bottom mb-4 pb-4">
                  <h6 className="h6 text-uppercase">
                    <small className="text-muted fw-bold">Enter coupon code</small>
                  </h6>
                  <small className="text-muted">Enter your coupen code to get extra discount.</small>
                  <div className="mt-2 d-flex">
                    <input
                      type="text"
                      onChange={(e) => {
                        setCoupon({ ...coupon, coupon: e.target.value });
                      }}
                      className="form-control rounded-0"
                      disabled={coupon.isapplied}
                    />

                    <input
                      type="button"
                      value="Apply"
                      className="d-block btn-block global_black_button px-5"
                      onClick={applyCoupon}
                      disabled={coupon.isapplied}
                    />
                  </div>
                </div>

                <div className="border-bottom mb-4 pb-4">
                  <h6 className="h6 text-uppercase">
                    <small className="text-muted fw-bold">Payment Details</small>
                  </h6>
                  <div className="d-flex mb-2 justify-content-between align-items-center">
                    <p className="m-0">Sub Total:</p>
                    <p className="m-0">{total}</p>
                  </div>

                  <div className="d-flex mb-2 justify-content-between align-items-center">
                    <p className="m-0">Shipping Fee : </p>
                    <p className="m-0">{data.delivery_fee ? data.delivery_fee : 0}</p>
                  </div>
                  {coupon.isapplied && (
                    <div className="d-flex mb-2 justify-content-between align-items-center">
                      <p className="m-0">Discount : </p>
                      <p className="m-0">{coupon.coupon_value}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex mb-2 justify-content-between align-items-center">
                <p className="m-0">Grand Total :</p>
                <p className="m-0">{data.delivery_fee ? parseInt(data.delivery_fee) + parseInt(total) - parseInt(coupon.coupon_value) : parseInt(total) - parseInt(coupon.coupon_value)}</p>
              </div>
            </div>

            <div className="row">
              {isVerified && (
                <>
                  {" "}
                  <div className="col-md-6">
                    <button
                      className="global_black_button w-100"
                      onClick={(e) => setisVerified(false)}>
                      ⬅ Edit Shipping Address
                    </button>
                  </div>
                  <div className="col-md-6 ">
                    <button
                      type="submit"
                      className="global_black_button w-100">
                      Checkout ➡
                    </button>
                  </div>
                </>
              )}

              {!isVerified && token && (
                <div className="col-md-12 ">
                  <button
                    type="submit"
                    className="global_black_button w-100">
                    Checkout ➡
                  </button>
                </div>
              )}
            </div>
            {/* <h3> :{total}</h3> */}
          </div>
        </div>
      </form>

      {/* NewsLetter Modal=================== */}
      <div
        className="modal "
        id="opt_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: "none", borderRadius: "0 !important" }}
        aria-hidden="true">
        <div className="modal-dialog  rounded-0 border-0">
          <div className="modal-content p-3 position-relative">
            <button
              type="button"
              className="close d-none close_opt_modal"
              data-bs-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-body">
              <form onSubmit={handleSubmit(VerifyOtp)}>
                <div className="mb-3">
                  <label className="col-form-label text-muted text-center text-success">Verify your phone number,Check your phone for verification code.</label>
                  <input
                    type="number"
                    className="form-control rounded-0 mb-3"
                    placeholder="Enter otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="d-flex gap-1">
                  <button
                    type="submit"
                    className="global_black_button flex-fill">
                    verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ================== */}
    </div>
  );
};

export default Checkout;
