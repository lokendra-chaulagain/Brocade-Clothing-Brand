import React from "react";
import { useForm } from "react-hook-form";

const Otp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let verifyHandler = async () => {};

  let resendOtp = async () => {};
  return (
    <div className="container  paddingTop">
      <br />
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit(verifyHandler)}>
        <div className="row row-cols-1 row-cols-md-1 offset-md-4 ">
          <div className="col col-md-6 col-sm-12 ps-3 mt-5 mt-md-0 mt-lg-0">
            <div className="card p-3 border-0 rounded-0 bg-black">
              <h1 className="h5 m-0 text-uppercase fs-6 text-white ">We have send otp to your Email/phone.</h1>
            </div>
            <hr />
            <p className="fs-17">Enter Otp </p>
            <div className="login">
              <input
                type="string"
                minLength="5"
                maxlength="6"
                {...register("verification_code", {
                  required: "Verification code is required field",
                })}
                className="form-control rounded-0 text-center"
                placeholder="OTP"
                style={{ letterSpacing: "10px" }}
              />
              {errors.verification_code && <small className="text-danger">Required Field</small>}
            </div>
            <button
              type="submit"
              className="global_black_button w-100 mt-2">
              Verify
            </button>
            <button
              type="button"
              className="ghostBtn align-right w-100"
              onClick={resendOtp}>
              Resend
            </button>
          </div>
        </div>
      </form>
      <div className="py-5 my-5"></div>
    </div>
  );
};

export default Otp;
