import ProductItem from "../../components/ProductItem";
import SingleProduct from "../../components/products/SingleProduct";
import React from "react";
import { useGetAllProductQuery } from "../../redux/api/globalApi";

const ProductId = () => {
  const { data: products } = useGetAllProductQuery();
  

  return (
    <>
      <div className="container pt-5 pt-md-0 pt-lg-5">
        <SingleProduct />
      </div>

      <div className="container">
        <p className="fw-bolder h2  ">YOU MAY ALSO LIKE</p>
      </div>

      <div className="container-fluid ">
        <ProductItem products={products} />
      </div>
    </>
  );
};

export default ProductId;
