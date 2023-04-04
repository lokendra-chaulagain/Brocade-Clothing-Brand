import React, { useState } from "react";
import Store from "./contact/Store";
import { useForm } from "react-hook-form";
import Api from "../services/Api.js";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSend = async () => {};

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
                {...register("name", {
                  required: "Name is required field",
                })}
                className="form-control rounded-0"
                type="text"
                placeholder="Full Name"
                aria-label="default input example"
                name="name"
              />
              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>

            <div className="row mt-3 px-2 gap-3">
              <input
                className=" col col-12  form-control rounded-0"
                {...register("email", {
                  required: "Email is required field",
                })}
                type="text"
                placeholder="Email"
                aria-label="default input example"
                name="email"
                autoCapitalize="off"
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <div className="row mt-3 px-2 gap-3">
              <input
                {...register("phone", {
                  required: "Phone is required field",
                })}
                className=" col px-2 form-control rounded-0"
                type="text"
                placeholder="Phone Number"
                aria-label="default input example"
                name="phone"
              />
              {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
            </div>

            <div className="row px-2 mt-3">
              <textarea
                {...register("message", {
                  required: "Message is required field",
                })}
                className="form-control rounded-0"
                name="message"
                rows="10"
              />
              {errors.message && <small className="text-danger">{errors.message.message}</small>}
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
