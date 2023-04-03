import Image from "next/image";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { TbMinus } from "react-icons/tb";
import { toast } from "react-toastify";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import images from "../../data/greenJacketImages.json";

const SingleProduct = () => {
  const [totalPrice, setTotalPrice] = useState(3700);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    toast.success("Added To Cart");
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <Swiper
            loop={true}
            navigation={true}
            slidesPerView={1}
            modules={[Navigation]}>
            {images.map((product, id) => (
              <SwiperSlide
                className="no_selection"
                key={id}>
                <Image
                  className="no_selection"
                  src={product.image}
                  alt="img"
                  objectFit="scale-down"
                  height={1000}
                  width={1000}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-6">
          <p className="h1">Bomber Jacket</p>
          <p> Stylish and versatile jacket that is typically short in length, with a front zip closure</p>

          <div className="d-flex align-items-center gap-3">
            <p className="h5">Colors : </p>
            <div className="color d-flex gap-3 my-3">
              <p className="p-2 cp bg-secondary"></p>
              <p className="p-2 cp bg-primary"></p>
              <p className="p-2 cp bg-danger"></p>
              <p className="p-2 cp bg-warning"></p>
              <p className="p-2 cp bg-black"></p>
            </div>
          </div>

          <p className="h4 my-2">NPR. {totalPrice * quantity}</p>

          <div className="d-flex align-items-center gap-2 mt-3">
            <p className="h6">Qty : </p>
            <div className="d-flex align-items-center gap-1">
              <TbMinus
                onClick={decreaseQuantity}
                size={20}
                className="cp "
              />
              <p className="no_selection h6">{quantity}</p>
              <MdAdd
                onClick={increaseQuantity}
                size={20}
                className="cp"
              />
            </div>
          </div>

          <div className="d-flex flex-column gap-3 mt-4 no_selection">
            <div className="details">
              <h1 className="h3 text-uppercase fs-5 fw-bold text-uppercase ">product details</h1>
              <div className="">A bomber jacket is a stylish and versatile jacket that is typically short in length, with a front zip closure, elasticated cuffs, and waistband. Originally designed for military pilots, bomber jackets are now a popular fashion item and are available in a variety of materials such as leather, nylon, and cotton.</div>
            </div>

            <div className="d-flex gap-2">
              <button
                onClick={addToCart}
                type="button"
                className="global_black_button w-100">
                Add to Cart
              </button>

              <Link href={"/checkout"}>
                <button
                  type="button"
                  className="global_black_button w-100">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
