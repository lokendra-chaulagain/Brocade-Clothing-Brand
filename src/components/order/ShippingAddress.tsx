import React from "react";

function ShippingAddress() {
  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <p>Shipping Address</p>
          </div>

          <div className="card-body">
            <table className="table">
              <tbody className="small">
                <tr>
                  <th>Name</th>
                  <th>Lokendra Chaulagain</th>
                </tr>

                <tr>
                  <th>Email</th>
                  <th>lokendr@gmail.com</th>
                </tr>
                <tr>
                  <th>Phone </th>
                  <th>998487464545</th>
                </tr>

                <tr>
                  <th>City</th>
                  <th>Kathmandu Nepal</th>
                </tr>

                <tr>
                  <th>Address</th>
                  <th>New Baneshwor</th>
                </tr>

                <tr>
                  <th>PinCode</th>
                  <th>994-55</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
