import React from "react";
import ExclusiveProduct from "../components/exclusive/ExclusiveProduct";
import GiveAway from "../components/exclusive/GiveAway";

export default function Exclusive() {
  return (
    <div className="pt-5">
      <ExclusiveProduct />
      <div className="mt-5">
        <GiveAway />
      </div>
    </div>
  );
}
