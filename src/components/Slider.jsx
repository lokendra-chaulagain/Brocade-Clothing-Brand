import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import style from "../../styles/slider.module.css";
import { Navigation } from "swiper";
import banners from "../data/banners.json";

const Slider = () => {
  return (
    <div className="mb-3 container-fluid">
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={1}
        modules={[Navigation]}>
        {banners.map((banner, id) => (
          <SwiperSlide key={id}>
            <div className="row d-flex align-items-center">
              <div className="col d-flex flex-column align-items-center">
                <p className="h1 fw-bold">BROCADE 2.0</p>
                <p className="h4 text-center">We believe in change, we believe in growth, we believe in us, we believe in you, we believe in youth.</p>
                <button
                  type="submit"
                  className="global_black_button  px-4 mt-2">
                  PRE-ORDER
                </button>
              </div>

              <div className={`${style.banner_image} col`}>
                <Image
                  className={style.carImg}
                  src={banner.image}
                  alt="img"
                  objectFit="scale-down"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
