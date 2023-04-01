import React, { useState, useEffect } from "react";
import Registersuggest from "./Registersuggest";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Api from "../../services/Api";
import Otp from "../../services/sendOtp";
import { useRouter } from "next/router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  watch();

  let LoginHandler = async () => {};

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1">
        <div className="col col-md-6 col-sm-12 pe-3">
          <Registersuggest />{" "}
        </div>
        <div className="col col-md-6 col-sm-12 ps-3 mt-5 mt-md-0 mt-lg-0">
          <h1 className="h4 text-uppercase fs-6 fw-bold">Login</h1>
          <hr />
          <form onSubmit={handleSubmit(LoginHandler)}>
            <div className="login">
              {data.via == "email" && (
                <div className="mb-2">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required field",
                    })}
                    name="email"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    className="form-control rounded-0 "
                    placeholder="Enter  Email  Address"
                  />
               <small className="text-danger">Lorem ipsum dolor sit.</small>
                </div>
              )}

              {data.via == "phone" && (
                <div className="mb-2">
                  <input
                    type="phone"
                    {...register("phone", {
                      required: "Phone is required field",
                      minLength: 10,
                      maxLength: 10,
                    })}
                    name="phone"
                    onChange={(e) => {
                      setData({ ...data, phone: e.target.value });
                    }}
                    className="form-control rounded-0 "
                    placeholder="Enter  Phone Number"
                  />
                  <small className="text-danger">Lorem ipsum dolor sit amet.</small>

                  <small className="text-danger">Must be at least 10 digit long</small>
                  <small className="text-danger">Must not be more than 10 digit long</small>
                </div>
              )}
              {data.via == "email" && (
                <div className="mb-3">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required field",
                    })}
                    name="password"
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                    className="form-control rounded-0 "
                    placeholder="Password"
                  />
                  <small className="text-danger">Lorem ipsum dolor sit.</small>
                </div>
              )}
            </div>
            <div className="row mb-2">
              <div className="col-md-6 col-5">
                <Link href="/forgot">
                  <a className="ghostBtn align-right">Forgot password</a>
                </Link>
              </div>

              <div className="col-md-6 text-end col-7">
                <a
                  className="cursor-pointer ghostBtn align-right outline-none border-0 border-none btn"
                  onClick={() => {
                    setData({ ...data, via: data.via == "email" ? "phone" : "email" });
                  }}>
                  {data.via == "email" ? "Login via phone number" : "Login via Email"}
                </a>
              </div>
            </div>

            <button
              className="myBtn w-100"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
