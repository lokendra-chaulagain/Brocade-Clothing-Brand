import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/product.module.css";
import products from "../data/banners.json";

export default function ProductItem() {
  return (
    <div className="row d-flex ">
      {products &&
        products.map((product: any, id: any) => (
          <div className="col-3 card-group ">
            <div className={`${style.mycard} ${style.hoverEffect} cursor-pointer card border-0 mb-4`}>
              <Link href={"/"}>
                <div
                  className="position-relative"
                  style={{ height: "420px", width: "480px" }}>
                  <Image
                    src={product.image}
                    objectFit="scale-down"
                    height={1000}
                    width={1000}
                  />
                </div>
              </Link>

              <div className={`card-body text-center`}>
                <h1 className="h6 text-uppercase fw-bold">Product Name</h1>
                <span>
                  <strong>NPRS 500 </strong>
                  &nbsp;<s> 700</s>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
