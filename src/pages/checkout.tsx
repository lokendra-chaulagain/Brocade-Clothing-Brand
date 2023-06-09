import React from "react";
import CartSection from "../components/checkout/CartSection";
import CheckOutForm from "../components/checkout/CheckOutForm";

export default function checkout() {
  return (
    <div className="container paddingTop">
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
        <CheckOutForm />
        <CartSection />
      </div>
    </div>
  );
}
