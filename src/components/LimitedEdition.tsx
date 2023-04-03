import React from "react";
import Image from "next/image";
import Link from "next/link";

const LimitedEdition = ({ title, image }: any) => {
  return (
    <div className="my-5">
      <p className="h2 fw-bold">{title}</p>

      <div className="mt-4">
        <p className="h6 text-uppercase fw-bold">Product Name : Bomber Jacket</p>
        <p className="h6">Lunch Date : 3033/4/12</p>
        <p className="h6">Available SKU. 20</p>
        <p className="h6">NPR. 4000</p>

        <Link href={"/product/limited-edition-bomber-jacket"}>
          <button
            type="button"
            className="px-2 bg-black color_white border-0 mt-2">
            Book Now
          </button>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <Image
          objectFit="scale-down"
          src={image}
          alt="hello"
          height={500}
        />
      </div>
    </div>
  );
};

export default LimitedEdition;
