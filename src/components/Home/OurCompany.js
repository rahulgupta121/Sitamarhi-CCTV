import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import {Container} from "react-bootstrap"
export const OurCompany = () => {
    console.log("hello")
  return (
    <>
         {/* <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src="assets/img/1.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/2.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/3.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/4.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/5.jpg" />
        </div>
      </OwlCarousel> */}


       <section>
      <Container>
      hello
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
          
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://touchtec.in/wp-content/uploads/2020/02/cu.jpg"/>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </Container>
    </section>
    {/* our client ends */}
    </>
  )
}
