import React from "react";
import Shipping_address from "../../components/order/ShippingAddress";
import ProductDetail from "../../components/order/ProductDetail";
import OrderSummary from "../../components/order/OrderSummary";

const OrderId = () => {
  return (
    <div className="container paddingTop mb-5">
      <h2 className="py-2 px-3 bg-dark text-left text-white mb-2 custom-fs-22">Order Detail of order ID :- 9948474</h2>
      <div className="row">
        <OrderSummary />
        <Shipping_address />
        <ProductDetail />
      </div>
    </div>
  );
};
export default OrderId;
