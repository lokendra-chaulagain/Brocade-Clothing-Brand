import React from "react";
import ProductItem from "../ProductItem";

const Suggested = () => {
  return (
    <div className="container mt-5">
      <h4 className="fx-6 fw-bold text-center text-uppercase  mb-5 mt-2">suggested</h4>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 ">
        <ProductItem />;
      </div>
    </div>
  );
};

export default Suggested;
