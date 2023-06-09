import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateSubscriberMutation } from "../redux/api/globalApi";

export default function NewsLetterModal() {
  const [createSubscriber] = useCreateSubscriberMutation();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const handleSubscribe = (handleAllField: any) => {
    createSubscriber(handleAllField);
    toast.success("Subscribe Success");
    reset();
  };

  return (
    <>
      <label
        className="newsletterTxt d-sm-none d-md-block d-none my-5 d-flex justify-content-start custom-fs-11 cursor-pointer no_selection  "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        NEWSLETTER
      </label>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        style={{ display: "none", borderRadius: "0 !important" }}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered rounded-0 border-0">
          <div className="modal-content p-3 position-relative">
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleSubscribe)}>
                <div className="mb-3">
                  <label className="col-form-label text-muted text-center">GET NOTIFIED ABOUT NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control rounded-0 mb-3"
                    placeholder="example@email.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="d-flex gap-1">
                  <button
                    type="submit"
                    className="global_black_button flex-fill">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
