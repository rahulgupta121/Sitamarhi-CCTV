import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./client.css";

// import required modules
// import {FreeMode, Autoplay, Pagination, Navigation } from "swiper";

import Slider from "react-slick";

import {Container} from "react-bootstrap"
export const OurClient = (props) => {
    // console.log("hello")
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const clientCarousel = [
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/himalayan-group.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
        {
          imgdata: "https://touchtec.in/wp-content/uploads/2020/02/cu.jpg",           
        },
    ]
  return (
    <>

       <section className="my-5 py-3">
      <Container>
      <h1 className="font-weight-bold text-center">Our Client</h1>
      <hr className="hr-line"/>
      <p>Our top-notch security technology helped us to become a seasoned player in the security industry. By spreading over the operational practices to develop full solution across varied industries helped us to become the best CCTV installation service provider in Mohali.</p>

      <Slider {...settings}>
      {
          clientCarousel && clientCarousel.map((index, key)=>{
            return(
              
        <div key={index.id}>
        <img src={index.imgdata} style={{width:"150px"}} alt="client-img"/>
        </div>
              
            )
          })
        }
        </Slider>
      </Container>
    </section>
    {/* our client ends */}
    </>
  )
}
