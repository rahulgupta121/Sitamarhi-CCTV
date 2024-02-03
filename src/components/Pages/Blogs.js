import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../assets/blogs/camera-transparent.png'
import img2 from '../assets/blogs/cctvcamera.jpg'
import img3 from '../assets/blogs/camera-installtion.jpg'
import img4 from '../assets/blogs/cctv-maintaince.jpg'
import img5 from '../assets/blogs/cctv-residence-768x461.jpg'
import img6 from '../assets/blogs/cctv-surveillance-system.jpg'
import img7 from '../assets/blogs/cctv-surveillance-system-01.jpg'
import img8 from '../assets/blogs/hero-bg-768x514.jpg'
import img9 from '../assets/blogs/residential.jpg'
import img10 from '../assets/blogs/thermometer-ads-768x768.jpg'
function Blogs() {
  return (
    <>
        <section className="mt-5 py-3">
  <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Blogs</h1>
  <hr className="hr-line"/>
  <Container>
    <Row>
        <Col >
        <img src={img1} className="img-fluid"/>
        <h6>Top 7 applications of CCTV security system</h6>
        <p>At present, everyone wants to install a CCTV security system ...</p>
        </Col>
        <Col >
        <img src={img2} className="img-fluid"/>
        <h6>The Best outdoor wireless security camera system</h6>
        <p>Nowadays, everybody wants complete protection of the home with the ...</p>
        </Col>
        <Col >
        <img src={img3} className="img-fluid"/>
        <h6>Top Places to install Home Security Cameras</h6>
        <p>Nowadays market offers various indoor and outdoor security cameras that ...</p>
        </Col>
    </Row>

    <Row>
        <Col >
        <img src={img4} className="img-fluid"/>
        <h6>How to Select the Right CCTV Camera for Home?</h6>
        <p>Choosing the right CCTV camera for home is a challenging ...</p>
        </Col>
        <Col >
        <img src={img5} className="img-fluid"/>
        <h6>Benefits of Installing CCTV Cameras in Your Home</h6>
        <p>Video surveillance technology is growing in Australia and now it ...</p>
        </Col>
        <Col >
        <img src={img6} className="img-fluid"/>
        <h6>How to Look over Outdoor Security?</h6>
        <p>If your belongings are gone missing or your car headlights ...</p>
        </Col>
    </Row>

    <Row>
        <Col >
        <img src={img7} className="img-fluid"/>
        <h6>Installation tips for CCTV Camera</h6> 
        <p>Today we will guide you through the installation of intelligent ...</p>       
        </Col>
        <Col >
        <img src={img8} className="img-fluid"/>
        <h6>How Wireless Surveillance Camera System does Beneficial?</h6>
        <p>Home and office securities are very essential, and you need ...</p>
          </Col>
        <Col >
        <img src={img9} className="img-fluid"/>

    <h6>Reasons Why Are People Have To Opt CCTV Cameras At Their Home?</h6>   
    <p>Frequently asked question that “what would you recommend the CCTV ...</p>  
    </Col>
    </Row>

    <Row>
        <Col >
        <img src={img10} className="img-fluid"/>
        
        <h6>How Infrared Non Contact Thermometer Makes Your Life Easier</h6>
        <p>Infrared Thermometer or Non-contact thermometer  helps to measure the temperature …</p>
        </Col>
        <Col >

        </Col>
        <Col >

        </Col>
    </Row>
  </Container>
  </section>
    </>
  )
}

export default Blogs