import Image from "next/image";
import React from "react";
import demo from "../assets/banner-1.webp";
import categories from "../data/banners.json";

export default function CategoryItem() {
  return (
    <div className="container-fluid px-5 mt-5">
      <p className="h3 fw-bold"> CATEGORIES</p>
      <div className="row">
        {categories &&
          categories.map((category: any, id: any) => (
            <div
              key={id}
              className="col-6 hoverContainer ">
              <Image
                src={category.image}
                objectFit="scale-down"
                className="image"
                height={1000}
                width={1000}
              />
              <div className="middle">
                <div className="text">Lorem, ipsum dolor.</div>
              </div>

              <h4 className="h4 mb-3 d-flex justify-content-center">Lorem, ipsum dolor.</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
