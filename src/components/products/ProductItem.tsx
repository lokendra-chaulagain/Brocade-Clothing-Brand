import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/product.module.css";
import demo from "../../assets/banner-1.webp";

const Product = () => {
  return (
    <div className="col-md-3 col-sm-6 col-6">
      <div className="card-group h-100">
        <div className={`${style.mycard} ${style.hoverEffect} cursor-pointer card border-0 mb-4`}>
          <Link href={"/"}>
            <Image
              src={demo}
              alt="img"
              className={`${style.myImg} h-100 img-fluid rounded-0`}
              objectFit="cover"
              layout="intrinsic"
              quality={0}
              height="270px"
              width="100%"
              loading="eager"
            />
          </Link>

          <div className={`card-body text-center`}>
            <h1 className="h6 text-uppercase fw-bold">Product Name</h1>
            <span>
              <strong>NPRS 500 </strong>
              &nbsp;<s> 700</s>
            </span>

            <h3 className=" custom-fs-16 mt-1 text-secondary text-uppercase custom-fw-800"> COLORS"</h3>

            <div className=" d-flex gap-3 mt-2 justify-content-center">
              <>
                <button className={`${style.hoverButton} p-3`}></button>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
