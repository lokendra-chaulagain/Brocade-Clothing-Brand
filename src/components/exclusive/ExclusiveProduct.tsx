import Image from "next/image";
import React from "react";
import red1 from "../../assets/products/jacket-red-1.webp";
import red2 from "../../assets/products/jacket-red-2.webp";
import red3 from "../../assets/products/jacket-red-3.webp";
import red4 from "../../assets/products/jacket-red-4.webp";

export default function ExclusiveProduct() {
  return (
    <div className="container-fluid">
      <div className="product d-sm-flex align-items-start row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 mb-5">
        <div className="img col">
          <Image
            className=""
            src={red1}
            height={500}
            objectFit="scale-down"
          />
          <Image
            className=""
            src={red2}
            height={1000}
            objectFit="scale-down"
          />
        </div>
        <div className="col col-sm-12 col-md-12 details mt-5 pt-5 sticky-top">
          <div className="mt-5">
            <h1>Yellow Jump Suit</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur praesentium a obcaecati expedita assumenda cumque quaerat, deleniti alias autem perspiciatis provident beatae facere, quasi pariatur saepe quisquam quos nihil distinctio quam corrupti impedit quas! Perferendis amet dolorem sit alias facere totam porro autem a cum ullam molestias, quas sequi labore qui est unde dolor obcaecati error sint, quia, vel ratione.</p>
            <button
              type="button"
              className="global_black_button mt-3">
              Reedem Now
            </button>
          </div>
        </div>
      </div>

      <div className="d-sm-flex gap-5">
        <div className=" border-0">
          <Image
            src={red3}
            height={500}
            width={500}
            objectFit="cover"
          />
        </div>
        <div className=" border-0">
          <Image
            src={red4}
            height={500}
            width={500}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
