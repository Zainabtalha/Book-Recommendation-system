import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 import './Banner.css';
  import image1 from './White Black Abstract Dark Modern Photo The Flawless Beauty Book Cover.png';
  import image2 from './White Black Abstract Dark Modern Photo The Flawless Beauty Book Cover.jpg';
  import image3 from './White Black Abstract Dark Modern Photo The Flawless Beauty Book Cover (1).png';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        <SwiperSlide><img src={image1} alt='HAHAHA'/></SwiperSlide>
        <SwiperSlide ><img src={image2}></img></SwiperSlide>
        <SwiperSlide><img src={image3} alt="OUR LAST SUMMER" /></SwiperSlide>
         <SwiperSlide><img src='https://images.thenile.io/r1000/9780349434278.jpg'></img></SwiperSlide>
         <SwiperSlide><img src='https://m5.paperblog.com/i/124/1246360/why-beautiful-book-covers-are-dangerous-L-tdrBMu.jpeg'></img></SwiperSlide>
     
      </Swiper>


    </div>
  )
}

export default Banner