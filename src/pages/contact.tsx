import React from "react";
import ContactForm from "../components/ContactForm";
import Store from "../components/contact/Store";

export default function contact() {
  return (
    <div className="paddingTop container-fluid">
      <p className="h3  text-center fw-bold">OUR STORES</p>
      <hr className="m-0  mb-5 mt-2" />
      <Store />
      <ContactForm />
    </div>
  );
}
