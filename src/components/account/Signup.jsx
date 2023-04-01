import React, { useState } from "react";
import Link from "next/link";
import { set, useForm } from "react-hook-form";
import Api from "../../services/Api";
import Otp from "../../services/sendOtp";
import { useRouter } from "next/router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let registerHandler = async () => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit(registerHandler)}>
        <div className="row jusity-content-center">
          <div className="col lg-6">
            <h1 className="h4 text-uppercase fs-6 fw-bold">Create account</h1>
            <hr />
            <div className="d-md-flex gap-3 mb-0 mb-md-4">
              <div className="w-100">
                <input
                  type="text"
                  {...register("first_name", {
                    required: "First name is required field",
                  })}
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder="First Name"
                  name="first_name"
                />

              <small className="text-danger">Lorem ipsum dolor sit amet.</small>
              </div>

              <div className="w-100">
                <input
                  type="text"
                  className="form-control rounded-0  mb-3 mb-md-0"
                  placeholder="Last Name"
                  name="last_name"
                />
              </div>
            </div>
            <div className="email d-md-flex gap-3 mb-0 mb-md-4">
              <div className="w-100">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required field",
                    type: "email",
                  })}
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder="Enter Email Address"
                  name="email"
                />
               <small className="text-danger">Lorem ipsum dolor sit amet.</small>
               <small className="text-danger">Must be proper email address</small>
              </div>

              <div className="w-100 position-relative">
                <input
                  type="number"
                  {...register("phone", {
                    required: "Phone is required field",
                    minLength: 10,
                    maxLength: 10,
                  })}
                  maxLength="10"
                  minLength="10"
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder="Enter Phone Number"
                  name="phone"
                  onChange={(e) => {
                    setData({ ...data, phone: e.target.value });
                  }}
                />
                {errors.phone && <small className="text-danger">Lorem ipsum dolor sit amet.</small>}

                <p className="position-absolute m-0">
                  <small className="text-warning">Must be at least 10 digit long</small>
                </p>

                <p>
                  <small className="text-warning">Must not be more than 10 digit long</small>
                </p>
              </div>
            </div>

            <div className="d-md-flex gap-3 mb-0 mb-md-3">
              <div className="w-100">
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required field",
                    minLength: 8,
                  })}
                  className="form-control rounded-0  mb-3 mb-md-0"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
                <small className="text-warning m-0">Must be at least 8 character</small>
                <small className="text-danger">
                  <br /> Lorem ipsum dolor sit amet.
                </small>
              </div>
              <div className="w-100">
                <input
                  type="password"
                  {...register("confirm_password", {
                    required: "Confirm password is required field",
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  className="form-control rounded-0 mb-3  mb-md-0"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  onChange={(e) => {
                    setData({ ...data, confirm_password: e.target.value });
                  }}
                />
                <small className="text-warning m-0"> Must be at least 8 character</small>

                {errors.confirm_password && (
                  <small className="text-danger">
                    <br /> Lorem ipsum dolor sit amet.
                  </small>
                )}
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                {...register("term", {
                  required: "Please agree to terms and conditions",
                })}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault">
                I agree to terms and conditions.
              </label>
              <br />
              <small className="text-danger">Lorem ipsum dolor sit.</small>
            </div>
            <br />
          </div>
          <div className="buttons d-flex flex-column">
            <button className="myBtn w-100">Register</button>
            <Link href="/login">
              <button className="ghostBtn">Back to Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
