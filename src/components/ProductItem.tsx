import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ products, title }: any) {
  return (
    <div className="row d-flex">
      <p className="h3 fw-bold ">{title}</p>
      {products &&
        products.map((product: any, index: any) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 card-group ">
            <div className=" card border-0 mb-4 hover_underline no_selection ">
              <Image
                src={product.images[0]}
                objectFit="scale-down"
                height={500}
                width={500}
                alt="img"
              />

              <Link href={`/product/${product.slug}`}>
                <div className="card-body text-center cursor-pointer ">
                  <p className="h6 text-uppercase fw-bold ">{product.name}</p>
                  <p className="h6">NPR. {product.price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
