import Image from "next/image";
import React, { useState } from "react";
// import img from "../../../public/6.jpg"

const SingleProduct = (props) => {
  let product = props.data.product;
  let size = props.data.size;
  let color = props.data.color;
  let isColorclicked = props.data.isColorclicked;

  // console.log(size)

  return (
    <div className="container paddingTop">
      <div className="product row row-cols-1 row-cols-md-2 gap-3 row-cols-lg-2 d-sm-flex justify-content-center">
        {/* {productDetails.map} */}


        <div className="productImage col col-md-5 col-lg-6 d-none d-sm-block">
          <div className="mb-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/${props.data.thumbnail}`}
              height={600}
              width={500}
              layout="responsive"
              objectFit="cover"
              loading="eager"
              priority={true}
              quality={20}
            />
          </div>
          
          {product.image1 && (
            <div className="mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image1}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
            </div>
          )}

          {product.image2 && (
            <div className="mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image2}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
            
              />
            </div>
          )}

          {product.image3 && (
            <div className="mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image3}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
              
              />
            </div>
          )}

          {product.image4 && (
            <div className="mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image4}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
             
              />
            </div>
          )}
        </div>







<div id="carouselExampleIndicators" className="carousel slide d-block d-sm-none" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    {product.image1&&<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>}
    {product.image2&&<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>}
   {product.image3&& <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>}
    {product.image4&&<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>}
  </div>
  <div className="carousel-inner">
 
    <div className="carousel-item active first_carousel">

              <Image
                 src={`${process.env.NEXT_PUBLIC_API_URL}/${props.data.thumbnail}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
    </div>

         
  {product.image1 && (
    <div className="carousel-item ">

              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image1}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
    </div>

          )}




              {product.image2 && (
    <div className="carousel-item ">

              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image2}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
    </div>

          )}

{product.image3 && (
    <div className="carousel-item ">

              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image3}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
    </div>

          )}



{product.image4 && (
    <div className="carousel-item ">

              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image4}`}
                height={600}
                width={500}
                layout="responsive"
                objectFit="cover"
                quality="10"
                loading="eager"
                decoding="async"
              />
    </div>

          )}


   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        <div className="productDetail col col-md-4 col-lg-4 align-self-start sticky-top mt-0 mt-sm-1 mt-md-4 mt-lg-5" style={{ top: '80px' }}>
          <h1 className="h3 text-uppercase fw-bold mb-3 mt-0 mt-sm-1 mt-md-4 mt-lg-5">
            {product.name}
          </h1>
          {product.short_desc}
          <div className="mt-2">
            <strong>NPRS.</strong>
            {product.offer_price && (
              <>
                {product.offer_price}
                &nbsp;<s> {product.price}</s>
              </>
            )}
            {!product.offer_price && product.price}
            /-
          </div>
          {color.length > 0 && (
            <div className="color d-flex gap-3 my-3">
              {color.map((item) => {
                return (
                  <button
                    key={Math.random()}
                    className={
                      props.data.colorid == item._id
                        ? `border-dark select_color`
                        : ` border `
                    }
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: `${item.name}`,
                    }}
                    onClick={props.data.UpdateColorValue}
                    id={item._id}
                  ></button>

                  
                );
              })}
            </div>
          )}

          {size.length > 0 && (
            <div className="btn-group d-flex gap-3 my-4">
              {size.map((item) => {
                return (
                  <button
                    key={Math.random()}
                    className={
                      props.data.sizeid == item._id
                        ? `mySecondaryBtn bg-dark text-white`
                        : `mySecondaryBtn`
                    }
                    onClick={props.data.UpdateSizeValue}
                    id={item._id}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          )}

          <div className="button mb-4 mt-2">
            <button
              className="global_black_button w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartoffcanvasNavbar"
              aria-controls="offcanvasNavbar"
              onClick={props.data.CartHandler}
            >
              Add to Cart
            </button>
          </div>
          <div className="details">
            <h1 className="h3 text-uppercase fs-5 fw-bold text-uppercase mb-3">
              product details
            </h1>
            <div className="mb-4">{product.long_desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
