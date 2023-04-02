import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const sendOTP = () => toast.success("OTP Sent Success");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleAllField = watch();

  const handleSendOTP = async () => {
    console.log(handleAllField);
    sendOTP();
  };

  return (
    <div className="col col-md-6 col-sm-12 ps-3 mt-5 mt-md-0 mt-lg-0">
      <form onSubmit={handleSubmit(handleSendOTP)}>
        <h1 className="h4 text-uppercase fs-6 fw-bold">Reset Password</h1>
        <hr />
        <p className="fs-17">Enter your email or phone number to reset your password.</p>
        <div className="login mb-3">
          <input
            type="text"
            className="form-control rounded-0 "
            placeholder="Email or Phone"
            name="phoneOrEmail"
            {...register("phoneOREmail", { required: true })}
          />
          {errors.phoneOREmail && <span className="text-danger">This field is required</span>}
        </div>
        <button
          type="submit"
          className="global_black_button w-100">
          Send Verification Code
        </button>
        <Link href={"/login"}>
          <button
            type="button"
            className="ghostBtn align-right w-100">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}
