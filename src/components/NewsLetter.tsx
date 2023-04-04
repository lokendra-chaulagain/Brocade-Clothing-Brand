import React from "react";
import { toast } from "react-toastify";

export default function NewsLetter() {
  const handleSubscribe = () => {
    toast.success("Subscribe Success");
  };
  return (
    <div className="container">
      <p className="h1 fw-bold text-center text-white mb-3">Subscribe Our News Letter</p>
      <div onClick={handleSubscribe}>
        <div className="">
          <p className="col-form-label  text-white text-center mb-2">GET NOTIFIED ABOUT NEW PRODUCT ARRIVALS AND EARLY RELEASE INFO</p>
          <input
            type="email"
            required
            className="form-control rounded-0 mb-3"
            placeholder="example@email.com"
            name="email"
          />
        </div>

        <button
          type="submit"
          className="global_black_button flex-fill w-100">
          subscribe
        </button>
      </div>
    </div>
  );
}
