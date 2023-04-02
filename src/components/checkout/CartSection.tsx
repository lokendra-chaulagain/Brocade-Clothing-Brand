import React from 'react'

export default function CartSection() {
  return (
    <div className="col col-lg-5">
    <h6 className="h6 text-uppercase">
      <small className="text-muted fw-bold">your products</small>
    </h6>
    {/* <Cartitem /> */}
    <div className="text-right border-top mt-4 py-4">
      <div>
        <div className="form-group border-bottom mb-4 pb-4">
          <h6 className="h6 text-uppercase">
            <small className="text-muted fw-bold">Enter coupon code</small>
          </h6>
          <small className="text-muted">Enter your coupen code to get extra discount.</small>
          <div className="mt-2 d-flex">
            <input
              type="text"
              className="form-control rounded-0"
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
            <p className="m-0">999</p>
          </div>

          <div className="d-flex mb-2 justify-content-between align-items-center">
            <p className="m-0">Shipping Fee : </p>
            <p className="m-0">9999</p>
          </div>
          <div className="d-flex mb-2 justify-content-between align-items-center">
            <p className="m-0">Discount : </p>
            <p className="m-0">4646</p>
          </div>
        </div>
      </div>

      <div className="d-flex mb-2 justify-content-between align-items-center">
        <p className="m-0">Grand Total :</p>
        <p className="m-0">kkkkk</p>
      </div>
    </div>

    <div className="row">
      <>
        {" "}
        <div className="col-md-6">
          <button className="global_black_button w-100">⬅ Edit Shipping Address</button>
        </div>
        <div className="col-md-6 ">
          <button
            type="submit"
            className="global_black_button w-100">
            Checkout ➡
          </button>
        </div>
      </>

      <div className="col-md-12 ">
        <button
          type="submit"
          className="global_black_button w-100">
          Checkout ➡
        </button>
      </div>
    </div>
    <h3> :4444</h3>
  </div>
  )
}
