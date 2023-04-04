import React from "react";
import Order from "./partials/order";
import Shipping_address from "./partials/shipping_address";
import Product_detail from "./partials/product_detail";

const Show = () => {
  return (
    <>
      <div className="container  paddingTop">
        <h2 className="py-2 px-3 bg-dark text-left text-white mb-2 custom-fs-22">Order Detail of order ID :- 9948474</h2>
        <div className="row">
          <Order />
          <Shipping_address />
          <Product_detail />
        </div>
      </div>
    </>
  );
};
export default Show;
