import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function VerifyPhone() {
  const verifySuccess = () => toast.success("Verify Success");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const optVerify = async () => {
    console.log(handleAllField);
    verifySuccess();
    reset();
  };

  return (
    <div className="my-5">
      <button
        type="button"
        className="close d-none close_opt_modal">
        {" "}
      </button>

      <form onSubmit={handleSubmit(optVerify)}>
        <p className="mb-2  text-muted text-center text-success">Verify your phone number,Check your phone for verification code.</p>
        <div className="mb-3">
          <input
            type="number"
            id="otp"
            className="form-control rounded-0 "
            placeholder="Enter OTP"
            {...register("otp", { required: true })}
          />
          {errors.otp && <span className="text-danger">This field is required</span>}
        </div>

        <button
          type="submit"
          className="global_black_button  w-100">
          verify
        </button>
      </form>
    </div>
  );
}
