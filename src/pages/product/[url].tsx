import ProductItem from "../../components/ProductItem";
import SingleProduct from "../../components/products/SingleProduct";
import React from "react";

const productId = () => {
  return (
    <>
      <div className="container pt-5 pt-md-0 pt-lg-5">
        <SingleProduct />
      </div>
     
     <div className="container">
     <p className="fw-bolder h2  ">YOU MAY ALSO LIKE</p>
     </div>

      <div className="container-fluid ">
        <ProductItem />
      </div>
    </>
  );
};

export default productId;
