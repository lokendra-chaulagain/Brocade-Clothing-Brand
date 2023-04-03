import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const handleAllField = watch();

  const registerHandler = async () => {
    console.log(handleAllField);
    toast.success("Register Success");
    reset();
  };

  return (
    <div className="container paddingTop">
      <form onSubmit={handleSubmit(registerHandler)}>
        <div className="row justify-content-center">
          <div className="col lg-6">
            <h1 className="h4 text-uppercase fs-6 fw-bold">Create account</h1>
            <hr />
            <div className="d-md-flex gap-3 mb-0 mb-md-4">
              <div className="w-100">
                <input
                  type="text"
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder="First Name"
                  id="firstName"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span className="text-danger">This field is required</span>}
              </div>

              <div className="w-100">
                <input
                  type="text"
                  className="form-control rounded-0  mb-3 mb-md-0"
                  placeholder="Last Name"
                  id="lastName"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span className="text-danger">This field is required</span>}
              </div>
            </div>

            <div className="email d-md-flex gap-3 mb-0 mb-md-4">
              <div className="w-100">
                <input
                  type="email"
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder=" Email Address"
                  id="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-danger">This field is required</span>}
              </div>

              <div className="w-100 position-relative">
                <input
                  type="number"
                  className="form-control rounded-0 mb-3 mb-md-0"
                  placeholder="Enter Phone Number"
                  id="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span className="text-danger">This field is required</span>}
              </div>
            </div>

            <div className="d-md-flex gap-3 mb-0 mb-md-3">
              <div className="w-100">
                <input
                  type="password"
                  className="form-control rounded-0  mb-3 mb-md-0"
                  placeholder="Password"
                  id="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-danger">This field is required</span>}
              </div>
              <div className="w-100">
                <input
                  type="password"
                  className="form-control rounded-0 mb-3  mb-md-0"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <span className="text-danger">This field is required</span>}
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="agree"
                {...register("agree", { required: true })}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault">
                I agree to terms and conditions.
              </label>

              <br />
              {errors.agree && <span className="text-danger">This field is required</span>}
            </div>
            <br />
          </div>
          <div className="buttons d-flex flex-column">
            <button
              type="submit"
              className="global_black_button w-100">
              Register
            </button>
            <Link href="/login">
              <button
                type="button"
                className="ghostBtn">
                Back to Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
