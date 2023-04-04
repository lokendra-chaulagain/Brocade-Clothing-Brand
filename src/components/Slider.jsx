import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import style from "../../styles/slider.module.css";
import { Navigation } from "swiper";
import banners from "../data/banners.json";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="pt-5 pt-md-0">
      <div className="mb-3  container-fluid pt-5 pt-lg-0">
        <Swiper
          loop={true}
          navigation={true}
          slidesPerView={1}
          modules={[Navigation]}>
          {banners.map((banner, id) => (
            <SwiperSlide key={id}>
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                  <p className="h1 fw-bold">{banner.title}</p>
                  <p className="h4 text-center">{banner.description}</p>
                  <Link href={"/product/bomber-jacket-premium-original-brocade"}>
                    <button
                      type="submit"
                      className="global_black_button  px-4 mt-2">
                      PRE-ORDER
                    </button>
                  </Link>
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
    </div>
  );
};

export default Slider;
