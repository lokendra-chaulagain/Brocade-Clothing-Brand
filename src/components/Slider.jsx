import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/navigation"
import Image from 'next/image'
import style from '../../styles/slider.module.css'
import { Navigation } from 'swiper'



const Slider = (props) => {
    // const img = 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  return (
    <div className='mb-3'>
      <Swiper
        // spaceBetween={50}
        loop={true}
        navigation={true}
        slidesPerView={1}
        modules={[Navigation]}
        >
            {
                props.banners.map((image, index) => (
                    <SwiperSlide key={Math.random()}>
                        <div  >
                            <div className={style.imgWrapper}>
                             { image.type==0 &&  <Image className={style.carImg} src={`${process.env.NEXT_PUBLIC_API_URL}/${image.image1}`} alt={image.title} layout='fill' objectFit='cover' 
                             
                             loading={index==0?'eager':'lazy'}
                             priority={index==0?true:false}
                             
                             />}

                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default Slider
