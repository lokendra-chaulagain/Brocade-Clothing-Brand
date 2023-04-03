import React from "react";
import CartItem from "../CartItem";
import Link from "next/link";

export default function CartSection() {
  return (
    <div className="col col-lg-5">
      <h6 className="h6 text-uppercase">
        <small className="text-muted fw-bold">your products</small>
      </h6>
      <CartItem />
      <div className="text-right border-top mt-4 py-4">
        <div>
          <div className="form-group border-bottom mb-4 pb-4">
            <h6 className="h6 text-uppercase">
              <small className="text-muted fw-bold">Enter coupon code</small>
            </h6>
            <small className="text-muted">Enter your coupOn code to get extra discount.</small>
            <div className="mt-2 d-flex">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="COUPON"
              />

              <input
                type="button"
                value="Apply"
                className="d-block btn-block global_black_button px-5"
              />
            </div>
          </div>

          <div className="border-bottom mb-4 pb-4">
            <h6 className="h6 text-uppercase">
              <small className="text-muted fw-bold">Payment Details</small>
            </h6>
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <p className="m-0">Sub Total:</p>
              <p className="m-0">1450</p>
            </div>

            <div className="d-flex mb-2 justify-content-between align-items-center">
              <p className="m-0">Shipping Fee : </p>
              <p className="m-0">100</p>
            </div>
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <p className="m-0">Discount : </p>
              <p className="m-0">130</p>
            </div>
          </div>
        </div>

        <div className="d-flex mb-2 justify-content-between align-items-center">
          <p className="m-0">Grand Total :</p>
          <p className="m-0">1420</p>
        </div>
      </div>

      <div className="d-flex flex-column gap-2">
        <Link href={"/profile"}>
          <button
            type="button"
            className="global_black_button w-100">
            ⬅ Edit Shipping Address
          </button>
        </Link>

        <button
          type="submit"
          className="global_black_button w-100">
          Checkout ➡
        </button>
      </div>
    </div>
  );
}
