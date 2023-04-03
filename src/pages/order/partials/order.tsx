import React from "react";

function order() {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5>Order Summary</h5>
          </div>

          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>Order ID</th>
                  <th>48444</th>
                </tr>
                <tr>
                  <th>Order Date</th>
                  <th> 66-038474</th>
                </tr>
                <tr>
                  <th>Shipping Fee</th>
                  <th>7474</th>
                </tr>
                <tr>
                  <th>Coupon </th>
                  <th>Loki</th>
                </tr>

                <tr>
                  <th>Total</th>
                  <th>64644</th>
                </tr>

                <tr>
                  <th>Payment Mode</th>
                  <th>paymentMode</th>
                </tr>

                <tr>
                  <th>Payment ID</th>
                  <th>paymentID</th>
                </tr>
                <tr>
                  <th>Status</th>
                  <th>
                    <span className="badge bg-success">Pending</span>
                    <span className="badge bg-info">Review</span>
                    <span className="badge bg-primary">Shipping</span>
                    <span className="badge bg-success">Delivered</span>
                    <span className="badge bg-danger">Cancel</span>
                    <span className="badge bg-info">Refeund Request</span>
                    <span className="badge bg-warning">Refunded</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default order;
