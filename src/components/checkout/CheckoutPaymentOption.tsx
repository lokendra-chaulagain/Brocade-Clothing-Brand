import React, { useState } from "react";

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
      <h6 className="h6 ">
        <small className="text-muted fw-bold">express checkout</small>
      </h6>
      <div className="card rounded-0">
        <div className="button-group p-3 d-flex gap-3 w-100">
          <button
            onClick={selectEsewa}
            type="button"
            className={paymentMode == "esewa" ? `global_black_button  w-100 ` : ` global_black_button_outline  w-100`}>
            E-SEWA
          </button>

          <button
            onClick={selectCard}
            type="button"
            className={paymentMode == "card" ? `global_black_button  w-100` : ` global_black_button_outline   w-100`}>
            CARD
          </button>

          <button
            onClick={selectCash}
            type="button"
            className={paymentMode == "cash" ? `global_black_button  w-100` : `global_black_button_outline  w-100`}>
            CASH
          </button>
        </div>
      </div>
    </div>
  );
}
