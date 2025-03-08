import React from 'react'
import {Container} from "react-bootstrap"

// import css
import "./testi.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

    const testimData = [
        {
            id: 0,
            testimonialData: "They provide professional and excellent services to install CCTV camera at my home. Their services are up-to-date and I am extremely happy with them.",
            testAuthor: "Deepshikha",
            userLocation: "Chandigarh",
        },
        {
            id: 1,
            testimonialData: "TouchTec provides high-quality services. Their installation staffs have good knowledge about their work and show amicable behavior. Their price was very reasonable, which fits to my budget perfectly. I would highly recommend them.",
            testAuthor: "Deepak Sharma",
            userLocation: "Clinic Owner",
        },
        {
            id: 2,
            testimonialData: "I have a very good experience with TouchTec solution as they always provide me the best service to resolve my issues. Their highly skilled team is always ready to resolve any kind of problem at any time whenever I contact them.",
            testAuthor: "Parwinder Kalara",
            userLocation: "Mohali"
        },

        {
            id: 3,
            testimonialData: "They offer great CCTV Cameras installation services. I caught the person who broke into my store with ultra-high quality images. Touch Tech provides extremely high-quality services. Highly recommended!!!",
            testAuthor: "Gautam Khurana",
            userLocation: "Manager"
        },

        {
            id: 4,
            testimonialData: "TouchTec renders the best assistance with its high bandwidth and high-quality CCTV cameras to monitor the environment anytime or anywhere. I highly recommend them to keep experience the amazing services.",
            testAuthor: "Gagan",
            userLocation: "CTO, Mohali"
        },
        {
            id: 5,
            testimonialData: "TouchTec is simply superb. I am so glad that I choose this company for the installation of CCTV cameras in our home. It’s a great peace of mind sitting here in another city to have such a reliable service and support.",
            testAuthor: "Akas",
            userLocation: "Patiala"
        },
        {
            id: 6,
            testimonialData: "Nice service offered by the team. very punctual and honest towards their commitment! The quality of all the products was excellent. I really appreciate the service.",
            testAuthor: "Anwar",
            userLocation: "Zirakpur"
        },
        {
            id: 7,
            testimonialData: "TouchTec installed biometric attendance machine for my factory. They have done their job perfectly. I am very much happy with their quick services and also recommend them to my friends as well.",
            testAuthor: "Deepika",
            userLocation: "Sitamarhi"
        },
    ]

    return (
    <>
    <section className='my-5 py-3'>
    <Container>
      <h1 className="font-weight-bold text-center">Testimonial</h1>
      <hr className="hr-line"/>
      {/* <p>Our top-notch security technology helped us to become a seasoned player in the security industry. By spreading over the operational practices to develop full solution across varied industries helped us to become the best CCTV installation service provider in Mohali.</p> */}
      
        <Slider {...settings}>
      {
          testimData && testimData.map((index, key)=>{
            return(
              
        <div key={index.id} className="text-center">
        {/* <img src={index.imgdata} style={{width:"150px"}}/> */}
        <p className='' style={{display: "contents"}}>{index.testimonialData}</p>
        <h6 className='text-center pt-4'>{index.testAuthor}</h6>
        <h6 className='text-center pt-2'>{index.userLocation}</h6>
        </div>
              
            )
          })
        }
        </Slider>
      </Container>
      </section>
    </>
  )
}

export default Testimonial;