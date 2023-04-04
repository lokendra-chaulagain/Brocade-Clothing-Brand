import React from "react";

function OrderSummary() {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <p>Order Summary</p>
        </div>

        <div className="card-body">
          <table className="table">
            <tbody className="small ">
              <tr>
                <th>Order ID</th>
                <th>48444</th>
              </tr>
              <tr>
                <th>Order Date</th>
                <th>2023/04/05</th>
              </tr>
              <tr>
                <th>Shipping Fee</th>
                <th>99</th>
              </tr>
              <tr>
                <th>Coupon </th>
                <th>DASHAIN</th>
              </tr>

              <tr>
                <th>Total</th>
                <th>1155</th>
              </tr>

              <tr>
                <th>Payment Mode</th>
                <th>ESEWA</th>
              </tr>

              <tr>
                <th>Payment ID</th>
                <th>8846-8474</th>
              </tr>
              <tr>
                <th>Status</th>
                <th>
                  <span className="badge bg-success">Pending</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
