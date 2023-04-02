import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutPaymentOption() {
  const [paymentMode, setPaymentMode] = useState("esewa");
  const selectEsewa = () => {
    setPaymentMode("esewa");
  };

  const selectCard = () => {
    setPaymentMode("card");
  };

  const selectCash = () => {
    setPaymentMode("cash");
  };

  return (
    <div>
      <h6 className="h6 text-uppercase">
        <small className="text-muted fw-bold">express checkout</small>
      </h6>
      <div className="card rounded-0">
        <div className="button-group p-3 d-flex gap-3 w-100">
          <button
            onClick={selectEsewa}
            type="button"
            className={paymentMode == "esewa" ? `global_black_button no_transform w-100 ` : `outline_button w-100`}>
            E-Sewa
          </button>

          <button
            onClick={selectCard}
            type="button"
            className={paymentMode == "card" ? `global_black_button no_transform w-100` : `outline_button w-100`}>
            Card
          </button>

          <button
            onClick={selectCash}
            type="button"
            className={paymentMode == "cash" ? `global_black_button no_transform w-100` : `outline_button w-100`}>
            Cash
          </button>
        </div>
      </div>
    </div>
  );
}
