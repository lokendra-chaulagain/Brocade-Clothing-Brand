import Link from "next/link";
import React from "react";
import demo from "../assets/gloves/0.webp";
import demo1 from "../assets/gloves/1.webp";
import demo2 from "../assets/gloves/2.webp";
import demo3 from "../assets/gloves/3.webp";
import demo4 from "../assets/gloves/4.webp";
import Image from "next/image";
import BookModal from "../components/BookModal";

export default function Lunching() {
  return (
    <div className="container pt-5">
      <div
        className="pt-4 pt-md-5"
        style={{ height: "100vh" }}>
        <p className="h2 fw-bold">Lunching Soon.</p>
        <div className="mt-4">
          <p className="h6 text-uppercase fw-bold">Product Name : Bomber Racing Gloves-G24</p>
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

        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image
            objectFit="scale-down"
            src={demo}
            alt="img"
            height={300}
            width={300}
          />

          <BookModal />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Image
            objectFit="scale-down"
            src={demo1}
            alt="img"
            height={600}
            width={600}
          />

          <Image
            objectFit="scale-down"
            src={demo2}
            alt="img"
            height={600}
            width={600}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Image
            objectFit="scale-down"
            src={demo3}
            alt="img"
            height={600}
            width={600}
          />

          <Image
            objectFit="scale-down"
            src={demo4}
            alt="img"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
