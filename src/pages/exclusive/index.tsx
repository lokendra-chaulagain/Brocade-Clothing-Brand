import ExclusiveProduct from "../../components/exclusive/ExclusiveProduct";
import GiveAway from "../../components/exclusive/GiveAway";
import React from "react";

export default function index() {
  return (
    <div className="paddingTop">
      <ExclusiveProduct />
      <div className="mt-5">
        <GiveAway />
      </div>
    </div>
  );
}
