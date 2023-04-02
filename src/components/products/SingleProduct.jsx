import Image from "next/image";
import React from "react";
import demo from "../../assets/banner-1.webp";

const SingleProduct = () => {
  return (
    <div className="container paddingTop">
      <div className="product row row-cols-1 row-cols-md-2 gap-3 row-cols-lg-2 d-sm-flex justify-content-center">
        <div className="productImage col col-md-5 col-lg-6 d-none d-sm-block">
          <div className="mb-2">
            <Image
              src={demo}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
              loading="eager"
              priority={true}
              quality={20}
            />
          </div>

          <div className="mb-2">
            <Image
              src={demo}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
              quality="10"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="mb-2">
            <Image
              src={demo}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div className="mb-2">
            <Image
              src={demo}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div className="mb-2">
            <Image
              src={demo}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide d-block d-sm-none"
          data-bs-ride="true">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 3"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active first_carousel">
              <Image
                src={demo}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="carousel-item ">
              <Image
                src={demo}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="carousel-item ">
              <Image
                src={demo}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="carousel-item ">
              <Image
                src={demo}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="carousel-item ">
              <Image
                src={demo}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div
          className="productDetail col col-md-4 col-lg-4 align-self-start sticky-top mt-0 mt-sm-1 mt-md-4 mt-lg-5"
          style={{ top: "80px" }}>
          <h1 className="h3 text-uppercase fw-bold mb-3 mt-0 mt-sm-1 mt-md-4 mt-lg-5">NAme</h1>
          Lorem ipsum dolor sit amet?
          <div className="mt-2">
            <strong>NPRS.500</strong>
            <s> </s>
          </div>
          <div className="color d-flex gap-3 my-3">
            return (
            <button
              // className={props.data.colorid == item._id ? `border-dark select_color` : ` border `}
              style={{
                height: "30px",
                width: "30px",
                // backgroundColor: `${item.name}`,
              }}></button>
            );
          </div>
          <div className="btn-group d-flex gap-3 my-4">
            return <button className="mySecondaryBtn">Item NAme</button>;
          </div>
          <div className="button mb-4 mt-2">
            <button
              className="global_black_button w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartoffcanvasNavbar"
              aria-controls="offcanvasNavbar">
              Add to Cart
            </button>
          </div>
          <div className="details">
            <h1 className="h3 text-uppercase fs-5 fw-bold text-uppercase mb-3">product details</h1>
            <div className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque officia dicta deserunt ad impedit, aperiam quasi possimus assumenda nemo amet consectetur quos, quas quod.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
