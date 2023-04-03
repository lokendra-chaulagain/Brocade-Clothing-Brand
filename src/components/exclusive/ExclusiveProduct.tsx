import Image from "next/image";
import React from "react";
import red1 from "../../assets/products/jacket-red-1.webp";
import red2 from "../../assets/products/jacket-red-2.webp";
import red3 from "../../assets/products/jacket-red-3.webp";
import red4 from "../../assets/products/jacket-red-4.webp";
import Link from "next/link";

export default function ExclusiveProduct() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-12  col-md-6">
          <Image
            className=""
            src={red1}
            height={500}
            width={500}
            objectFit="scale-down"
          />
        </div>

        <div className="col-12 col-md-6">
          <div className="mt-5">
            <p className="h2 mb-2">Res Jump Suit Jacket</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur praesentium a obcaecati expedita assumenda cumque quaerat, deleniti alias autem perspiciatis provident beatae facere, quasi pariatur saepe quisquam quos nihil distinctio quam corrupti impedit quas! Perferendis amet dolorem sit alias facere totam porro autem a cum ullam molestias, quas sequi labore qui est unde dolor obcaecati error sint, quia, vel ratione.</p>
            <Link href={"/product/exclusive-bomber-jacket-premium-original-brocade"}>
              <button
                type="button"
                className="global_black_button mt-3">
                Book Now 
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-4">
          <Image
            className=""
            src={red2}
            height={500}
            width={500}
            objectFit="scale-down"
          />
        </div>

        <div className="col-12 col-lg-4">
          <Image
            className=""
            src={red3}
            height={500}
            width={500}
            objectFit="scale-down"
          />
        </div>

        <div className="col-12 col-lg-4">
          <Image
            className=""
            src={red4}
            height={500}
            width={500}
            objectFit="scale-down"
          />
        </div>
      </div>
      <Link href={"/product/exclusive-bomber-jacket-premium-original-brocade"}>
        <button
          type="button"
          className="global_black_button  w-100 d-block d-sm-none">
          Book Now
        </button>
      </Link>
    </div>
  );
}
