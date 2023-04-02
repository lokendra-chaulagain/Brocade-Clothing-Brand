import Link from "next/link";
import React from "react";

export default function RegisterSuggest() {
  return (
    <div>
      <h1 className="h4 text-uppercase fs-6 fw-bold">new customers</h1>
      <hr />
      <p className="fs-14">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
      <Link href="/register">
        <button
          type="button"
          className="global_black_button w-100 mt-2">
          Register
        </button>
      </Link>
    </div>
  );
}
