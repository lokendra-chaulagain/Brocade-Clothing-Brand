import ProductItem from "../../components/ProductItem";
import SingleProduct from "../../components/products/SingleProduct";
import React from "react";

const productId = () => {
  return (
    <>
      <div className="container paddingTop">
        <SingleProduct />
      </div>

      <div className="container-fluid ">
        <p className="fw-bolder h2 text-center">YOU MAY ALSO LIKE</p>
        <ProductItem />
      </div>
    </>
  );
};

export default productId;
