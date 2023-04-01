import React from "react";
import { toast } from "react-toastify";

const CheckoutPaymentOption = () => {
  return (
    <div>
      <h6 className="h6 text-uppercase">
        <small className="text-muted fw-bold">express checkout</small>
      </h6>
      <div className="card rounded-0">
        <div className="button-group p-3 d-flex gap-3 w-100">
          <button
            type="button"
            // className={data.payment_mode == "esewa" ? `myBtn w-100 ` : `mySecondaryBtn w-100`}
            value="esewa">
            E-Sewa
          </button>

          <button
            type="button"
            // className={data.payment_mode == "cod" ? `myBtn w-100` : `mySecondaryBtn w-100`}
            value="cod">
            Cash
          </button>

          <button
            type="button"
            // className={data.payment_mode == "card" ? `myBtn w-100` : `mySecondaryBtn w-100`}
            value="card"
            //  onClick={(e)=>setData({...data,payment_mode:e.target.value})}
            onClick={(e) => {
              toast.error("Payment via Card is currently unavailable");
            }}>
            Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentOption;
