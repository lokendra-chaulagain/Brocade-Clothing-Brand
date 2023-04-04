import React from "react";

function ProductDetail() {
  return (
    <>
      <div className="col-md-12 mt-2">
        <div className="card">
          <div className="card-header">
            <p>Product Detail</p>
          </div>

          <div className="card-body">
            <table className="table">
              <thead className="small">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Unit price</th>
                  <th>Qty</th>
                  <th>Sub total</th>
                </tr>
              </thead>

              <tbody className="small">
                <tr>
                  <td>Image</td>
                  <td>1</td>
                  <td>3</td>
                  <td>red</td>
                  <td>444</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
