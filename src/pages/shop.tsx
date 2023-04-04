import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import { BiSortUp, BiSortDown } from "react-icons/bi";
import Customization from "../components/exclusive/Customization";

export default function Shop() {
  const [sort, setSort] = useState("expensive");

  const selectExpensive = () => {
    setSort("expensive");
  };

  const selectCheap = () => {
    setSort("cheap");
  };

  return (
    <div className="paddingTop">
      <div className="d-flex px-5  align-items-center justify-content-between ">
        <p className="h2 fw-bold  ">OUR PRODUCTS</p>
        <div>
          {sort == "cheap" && (
            <BiSortUp
              onClick={selectExpensive}
              className="cursor-pointer"
              size={26}
            />
          )}

          {sort == "expensive" && (
            <BiSortDown
              onClick={selectCheap}
              className="cursor-pointer"
              size={26}
            />
          )}
        </div>
      </div>
      <ProductItem />

      <p className="h2 fw-bold px-5 container mt-5">WE OFFERS CUSTOMIZATION DESIGN</p>
      <Customization />
    </div>
  );
}
