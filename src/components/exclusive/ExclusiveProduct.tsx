import Image from "next/image";
import React from "react";
import Link from "next/link";
import products from "../../data/whiteJackets.json";

export default function ExclusiveProduct() {
  const white1 = products[0].image;
  const white2 = products[1].image;
  const white3 = products[2].image;
  const white4 = products[3].image;
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-12  col-md-6">
          <Image
            className=""
            src={white1}
            height={500}
            width={500}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col-12 col-md-6">
          <div className="mt-5">
            <p className="h2 mb-2">Res Jump Suit Jacket</p>
            <p>
              Res Jump Suit jacket is a classic and stylish piece of outerwear that has been popular for decades. It is a versatile garment that can be worn in a variety of settings, from casual outings to more formal occasions. Bomber jackets were originally designed for pilots during World War II, and they have since become a staple of men's fashion.Men's bomber jackets are suitable for all seasons, making them a great investment for any wardrobe. They are perfect for layering over a t-shirt
              or sweater in the cooler months or for wearing on their own during the warmer months.
            </p>
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
            src={white2}
            height={500}
            width={500}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col-12 col-lg-4">
          <Image
            className=""
            src={white3}
            height={500}
            width={500}
            objectFit="scale-down"
            alt="img"
          />
        </div>

        <div className="col-12 col-lg-4">
          <Image
            className=""
            src={white4}
            height={500}
            width={500}
            objectFit="scale-down"
            alt="img"
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
