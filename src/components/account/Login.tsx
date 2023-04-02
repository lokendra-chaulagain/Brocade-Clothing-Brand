import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import RegisterSuggest from "./Registersuggest";
import { toast } from "react-toastify";

const Login = () => {
  const loginSuccess = () => toast.success("Login Success");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const LoginHandler = async () => {
    console.log(handleAllField);
    loginSuccess();
    reset();
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1">
        <div className="col col-md-6 col-sm-12 pe-3">
          <RegisterSuggest />
        </div>
        <div className="col col-md-6 col-sm-12 ps-3 mt-5 mt-md-0 mt-lg-0">
          <h1 className="h4 text-uppercase fs-6 fw-bold">Login</h1>
          <hr />
          <form onSubmit={handleSubmit(LoginHandler)}>
            <div className="login">
              <div className="mb-2">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-0 "
                  placeholder="Enter  Email  Address"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-danger">This field is required</span>}
              </div>

              <div className="mb-2">
                <input
                  type="number"
                  name="phone"
                  className="form-control rounded-0 "
                  placeholder="Enter  Phone Number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span className="text-danger">This field is required</span>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-0 "
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-danger">This field is required</span>}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 col-5">
                <Link href="/forgot">
                  <a className="ghostBtn align-right">Forgot password</a>
                </Link>
              </div>

              <div className="col-md-6 text-end col-7">
                <a className="cursor-pointer ghostBtn align-right outline-none border-0 border-none btn">Login via Email</a>
              </div>
            </div>

            <button
              className="global_black_button w-100"
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
