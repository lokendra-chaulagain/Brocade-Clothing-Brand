import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function FooterSmallDeviceSubscribe() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const handleSubscribe = () => {
    toast.success("Subscribe Success");
    console.log(handleAllField);
    reset();
  };

  return (
    <div
      className="d-block d-md-none my-4 p-0 "
      style={{ display: "none" }}>
      <form onSubmit={handleSubscribe}>
        <div className="mb-3">
          <label className="form-label">Email address</label>

          <input
            type="email"
            className="form-control rounded-0 mb-3"
            placeholder="example@email.com"
            name="email2"
            id="email"
          />
        </div>

        <div className="d-grid gap-2">
          <button
            className="global_black_button"
            type="submit">
            Send me cool Stuff{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
