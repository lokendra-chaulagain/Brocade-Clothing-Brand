import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../data/products.json";

export default function ProductItem() {
  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, index: any) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-group ">
            <div className=" card border-0 mb-4 hover_underline no_selection ">
              <Image
                src={product.image}
                objectFit="scale-down"
                height={500}
                width={500}
                alt="img"
              />

              <Link href={"/product/bomber-jacket-premium-original-brocade"}>
                <div className="card-body text-center cursor-pointer ">
                  <p className="h6 text-uppercase fw-bold ">Product Name</p>
                  <p className="h6">
                    NPR. 500 &nbsp;<s>NPR 700</s>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
