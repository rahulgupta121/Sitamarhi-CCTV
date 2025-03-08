import React from 'react'
import { Container, Row,Col, Card } from 'react-bootstrap';
import img1 from '../assets/our service/hd-ip-cctv-cameras-01.jpg'
import img2 from '../assets/our service/cctv-surveillance-system-01.jpg'
import img3 from '../assets/our service/biometric-attendance-system.jpg'
import img4 from '../assets/our service/fire-alarm-detection-system.jpg'
import img5 from '../assets/our service/IP-PBX-system.jpg'
import img6 from '../assets/our service/cctv-maintaince.jpg'
import img7 from '../assets/our service/camera-installtion.jpg'
import img8 from '../assets/our service/online-support.jpg'
import img9 from '../assets/our service/home-automation-system.jpg'

const Services = () => {
  return (
    <>
    <section className="mt-5 py-3">
  <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Our Services</h1>
  <hr className="hr-line"/>
  <Container>
    <Row>
      <p>TouchTec provides a wide range of services that have been designed to fulfill the customer’s unique requirements. It covers <strong>CCTV camera installation, home security cameras, WiFi wireless IP camera, IP CCTV Camera, AI & IOT Devices, Fire alarm system, time and attendance machine, access control and biometric attendance system</strong> and many more solutions to enhance the security of the important places.</p>
      <Col lg={4} md={4}>
      {/* <img src={img1} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img1}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>HD IP CCTV CAMERAS</Card.Title>
                  <Card.Text>
                  Our intelligent and innovative CCTV technology is highly useful for 
                  the self-diagnose surveillance system and monitors all the activities clearly.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
      <Col lg={4}>
      {/* <img src={img2} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
      <Card.Img
                  variant="top"
                  src={img2}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>CCTV SURVEILLANCE SYSTEM</Card.Title>
                  <Card.Text>
                  Our intelligent and innovative CCTV technology is highly useful for 
                  the self-diagnose surveillance system and monitors all the activities clearly.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
    <Col lg={4}>
      {/* <img src={img3} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img3}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>BIOMETRIC ATTENDANCE & ACCESS CONTROL SYSTEM</Card.Title>
                  <Card.Text>
                    We have a fool proof solution to avoid obstacles, only an attendance 
                    system that involves a Biometrics attendance system is highly useful to resolve these types of the issues.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
    </Row>
    <Row className='mt-3'>
      <Col lg={4}>
      {/* <img src={img4} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img4}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>FIRE ALARM & DETECTION SYSTEM</Card.Title>
                  <Card.Text>
                  We assure you to provide the best security devices for better services. 
                  We provide sell and install fire alarm system for an emergency situations.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
      <Col lg={4}>
      {/* <img src={img5} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img5}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>OTHER SERVICES</Card.Title>
                  <Card.Text>
                    Instead of CCTV camera installation services, we also provide many other types of the 
                    services as well such Image Projector, Video Conferencing System etc.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
      <Col lg={4}>
      {/* <img src={img6} className="img-fluid"/> */}
      <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img6}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>ANNUAL MAINTENANCE CONTRACT</Card.Title>
                  <Card.Text>
                  It is important to have an Annual Maintenance Contract for your Security system. As we all know, the security and surveillance system of 
                  your building or property has a central role in your safety and security.
                  </Card.Text>
                </Card.Body>
              </Card>
      </Col>
    </Row>
    <Row className='mt-3'>
    <Col lg={4}>
        {/* <img src={img7} className="img-fluid"/> */}
        <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img7}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>INSTALLATION SERVICES</Card.Title>
                  <Card.Text>
                      TouchTec offers an extensive portfolio of products, which has been designed to meet customers’ unique requirements. It covers CCTV Cameras, Time & 
                      Attendance Systems, HD IP Security Cameras, DVRs, Video Door Phones, and much more.
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
        <Col lg={4}>
        {/* <img src={img8} className="img-fluid"/> */}
        <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img8}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>24/7 ONLINE SUPPORT</Card.Title>
                  <Card.Text>           
                      You can approach us anytime for the online support. We believe in to deliver 
                      high-quality services without compromise on the quality.    
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
        <Col lg={4}>
        {/* <img src={img9} className="img-fluid"/> */}
        <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={img9}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>HOME AUTOMATION SYSTEM</Card.Title>
                  <Card.Text>           
                  Our professional expertise provides professional advice and solutions such as home camera 
                  systems to businesses and individuals for the advanced security solutions.   
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
    </Row>
  </Container>
  </section>
    </>
  )
}

export default Services;