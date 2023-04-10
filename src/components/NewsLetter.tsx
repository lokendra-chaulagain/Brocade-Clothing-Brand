import React from "react";
import { toast } from "react-toastify";
import { useCreateSubscriberMutation } from "../redux/api/globalApi";
import { useForm } from "react-hook-form";

export default function NewsLetter() {
  const [createSubscriber] = useCreateSubscriberMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const inputFields = watch();


  const handleSubscribe = (inputFields: any) => {
    createSubscriber(inputFields);
    toast.success("Subscribe Success");
    reset()
  };
  
  return (
    <div className="container">
      <p className="h1 fw-bold text-center text-white mb-3">Subscribe Our News Letter</p>
      <form onSubmit={handleSubmit(handleSubscribe)}>
        <div className="">
          <p className="col-form-label  text-white text-center mb-2">GET NOTIFIED ABOUT NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</p>
          <input
            type="email"
            id="email"
            // required
            className="form-control rounded-0 mb-3"
            placeholder="example@email.com"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <button
          type="submit"
          className="global_black_button flex-fill w-100">
          subscribe
        </button>
      </form>
    </div>
  );
}
