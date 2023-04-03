import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../data/banners.json";

export default function ProductItem() {
  return (
    <div className="row d-flex">
      {products &&
        products.map((product: any, id: any) => (
          <div className="col-3 card-group ">
            <div className="cursor-pointer card border-0 mb-4">
              <Link href={"/product/bomber-jacket-premium-original-brocade"}>
                <div
                  className="position-relative product_wrapper"
                  style={{ height: "420px", width: "480px" }}>
                  <Image
                    className="product_image"
                    src={product.image}
                    objectFit="scale-down"
                    height={1000}
                    width={1000}
                  />
                </div>
              </Link>

              <div className={`card-body text-center`}>
                <p className="h6 text-uppercase fw-bold">Product Name</p>
                <p className="h6">
                  NPR. 500 &nbsp;<s> 700</s>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
