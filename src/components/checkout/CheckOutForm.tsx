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

export default function CheckOutForm() {
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
            {...register("email", {
              required: "Email is required field and type must be email",
            })}
            className="form-control rounded-0 "
            placeholder="example@email.com"
          />
          {errors.email && <small className="text-danger">jdhdjhdjdn</small>}
        </div>
        <input
          type="checkbox"
          className="mb-3 me-2"
          name="agree"
          id="agree"
          value="1"
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
            })}>
            <option value="KTM Outside ring road">KTM Outside ring road</option>
            <option value="Koteshor Area">Koteshor Area</option>
            <option value="Budhanilkantha">Budhanilkantha</option>
            <option value="Balaju">Balaju</option>
          </select>
          {errors.main_area && <small className="text-danger">dddd</small>}
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
            />

            {errors.first_name && <small className="text-danger">dddd</small>}
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
              {...register("phone", {
                required: "Phone is required field",
                minLength: 10,
                maxLength: 10,
              })}
              className="form-control rounded-0 "
              placeholder="Phone"
            />

            {errors.phone && <small className="text-danger">dddd</small>}

            {errors.phone?.type === "minLength" && (
              <p>
                <small className="text-danger">Must be at least 10 digit long</small>
              </p>
            )}
            <p>
              <small className="text-danger">Must not be more than 10 digit long</small>
            </p>
          </div>

          <div className="w-100  mb-3">
            <Select
              className="w-100 "
              placeholder="Select Area"
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
              {...register("address", {
                required: "Address is required field",
              })}
              placeholder="Address"
            />
            {errors.address && <small className="text-danger">jddjd</small>}
          </div>
        </div>

        <input
          type="text"
          className="form-control rounded-0 mb-3"
          placeholder="Notes"
        />
        <button className="global_black_button w-100">Verify Phone number</button>

        <button
          type="button"
          className="global_black_button w-100 d-none open_modal"
          data-bs-toggle="modal"
          data-bs-target="#opt_modal"></button>
      </div>
    </div>
  );
}
