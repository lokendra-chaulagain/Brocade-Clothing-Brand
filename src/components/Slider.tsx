import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper";
import Link from "next/link";
import { useGetAllBannerQuery } from "../redux/api/globalApi";

const Slider = () => {
  const { data } = useGetAllBannerQuery<any>();
  const banners = data && data.allBanner;
  console.log(banners);

  return (
    <div className="pt-5 pt-md-0">
      <div className="mb-3  container-fluid pt-5 pt-lg-0">
        <Swiper
          loop={true}
          navigation={true}
          slidesPerView={1}
          modules={[Navigation]}>
          {banners &&
            banners.map((banner: any, id: any) => (
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

                  <div className=" col">
                    <Image
                      className=""
                      src={banner.images[0]}
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
