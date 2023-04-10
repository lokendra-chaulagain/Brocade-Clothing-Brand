import React from "react";
import { useForm } from "react-hook-form";
import { useCreateContactMutation } from "../redux/api/globalApi";

const ContactForm = () => {
  const [createContact] = useCreateContactMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const handleSend = async (handleAllField:any) => {
    try {
      createContact(handleAllField);
      reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row  ">
          <form
            className="col-12 d-flex flex-column order-first order-md-last"
            onSubmit={handleSubmit(handleSend)}>
            <hr className="d-block d-md-none" />
            <hr className="d-block d-md-none" />
            <p className="h3 mb-2 text-center fw-bold">CONTACT US</p>

            <div className="row px-2">
              <input
                className="form-control rounded-0"
                type="text"
                placeholder="Full Name"
                aria-label="default input example"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="row mt-3 px-2 gap-3">
              <input
                className=" col col-12  form-control rounded-0"
                type="text"
                placeholder="Email"
                aria-label="default input example"
                id="email"
                autoCapitalize="off"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="row mt-3 px-2 gap-3">
              <input
                className=" col px-2 form-control rounded-0"
                type="text"
                placeholder="Phone Number"
                aria-label="default input example"
                id="phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>This field is required</span>}
            </div>

            <div className="row px-2 mt-3">
              <textarea
                className="form-control rounded-0"
                id="message"
                rows="10"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <div className="row  px-2 mt-3">
              <button
                type="submit"
                className="global_black_button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
