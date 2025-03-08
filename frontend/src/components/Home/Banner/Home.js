import React, { useState } from "react";
import "./banner.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import cctv1 from "../../assets/cctv.jpg";
import ourSer1 from "../../assets/ourService1.jpg";
import ourSer2 from "../../assets/ourService2.jpg";
import ourSer3 from "../../assets/ourService3.jpg";
import ourSer4 from "../../assets/ourService4.jpg";
import ourSer5 from "../../assets/ourService5.jpg";
import ourSer6 from "../../assets/ourService6.jpg";
import { OurClient } from "../OurClient/OurClient";
import SupportUs from "../SupportUs/SupportUs";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
function Banner() {
  const [userData, setuserData] = useState({
    fullName: "",
    userEmail: "",
    phoneNo: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuserData({ ...userData, [name]: value });
  };

  // data submission on firebase

  const dataSubmit = async (e) => {
    e.preventDefault();
    const { fullName, userEmail, phoneNo } = userData;
    const res = await fetch(
      "https://starconn-81072-default-rtdb.firebaseio.com//userDataRec.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/Json",
        },
        body: JSON.stringify({
          fullName,
          userEmail,
          phoneNo,
        }),
      }
    );

    if (res) {
      alert("data submission");
      setuserData({
        fullName: "",
        userEmail: "",
        phoneNo: "",
      });
    } else {
      alert("please enter your data correctly");
    }
  };

  return (
    <>
      {/* <section className='topNavbar'>
      <Topbar />
    </section> */}
      <section className="main-sec-banner py-5 img-fluid">
        <Container>
          <Row className="py-5">
            <Col lg={6} md={6} sm={12}>
              <h1 className="main-heading">Providing</h1>
              <h1 className="main-heading">
                High Security Solutions with Assurance
              </h1>
              <p className="main-para">
                TouchTec offers a comprehensive range of advanced security
                solutions according to the demands of the various industries. We
                provide efficient, reliable and integrated surveillance
                solutions from around the globe.
              </p>
              <Row>
                <Col>
                  <Button className="red-btn" variant="primary" type="button">
                  <Link to="/our-service" className="text-white"> Our Services</Link>   
                  </Button>
                  <Button className="red-btn" variant="primary" type="button">
                   <Link to="/contact-us" className="text-white"> Contact Us</Link>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="bg-white p-4"
              style={{ borderRadius: "10px" }}
            >
              <Form action="post">
                <h4 className="request-head">Request A Free Quote</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    name="fullName"
                    onChange={postUserData}
                    value={userData.fullName}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    placeholder="Enter email"
                    onChange={postUserData}
                    value={userData.userEmail}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone No"
                    name="phoneNo"
                    onChange={postUserData}
                    value={userData.phoneNo}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit" onClick={dataSubmit}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 about-company py-3">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <h4>About Our Company</h4>
              <hr className="hr-line1" />
              <p>
                CCTV also known, as Closed Circuit Television is an excellent
                surveillance system in terms of the safety and security of a
                particular property. It seems simple to carry CCTV installation
                services at your home and workplace. In actuality, one requires
                installing it with caution to operate it correctly.
              </p>
              <p>
                We provide wired and wireless CCTV camera installation services
                for many places like residential areas, commercial areas,
                hotels, jewellery shops, educational institutions, Universities,
                Malls, Film Industries and many more all across the region.
              </p>
              <p>
                The home security camera installation services should be
                executed correctly so that the system works properly and there
                is no lack of security at the place. With the best surveillance
                camera installation services, you do not need to worry about the
                security of your home or workplace.
              </p>
              <Button className="red-btn" variant="danger" type="button">
                Learn More
              </Button>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={cctv1} className="card-img img-fluid" alt="home-img" />
              {/* {cctv1} */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 about-product py-3">
        <Container>
          <h1 className="font-weight-bold text-center">Our Services</h1>
          <hr className="hr-line" />

          <p>
            TouchTec provides a wide range of services that have been designed
            to fulfill the customer’s unique requirements. It covers CCTV camera
            installation, home security cameras, wireless IP camera, IP CCTV
            Camera, AI & IOT Devices, Fire alarm system, time and attendance
            machine,
            <span className="text-center">
              access control and biometric attendance system and many more
              solutions to enhance the security of the important places.{" "}
            </span>
          </p>
          <Row>
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={ourSer1}
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
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={ourSer2}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>HD IP CCTV CAMERAS</Card.Title>
                  <Card.Text>
                  Our HD IP CCTV Cameras are reliable, efficient and highly affordable. You can use varieties of cameras according to the requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={ourSer3}
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
          <Row className="my-4">
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={ourSer4}
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
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={ourSer5}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>HOME AUTOMATION SYSTEM</Card.Title>
                  <Card.Text>
                  Our professional expertise provides professional advice and solutions such as home 
                  camera systems to businesses and individuals for the advanced security solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "20rem" }}>
            <Link>
                <Card.Img
                  variant="top"
                  src={ourSer6}
                  className="card-img img-fluid"
                />
                <Card.Body>
                  <Card.Title>OTHER SERVICES</Card.Title>
                  <Card.Text>
                    Instead of CCTV camera installation services, we also provide many other types of 
                    the services as well such Image Projector, Video Conferencing System etc.
                  </Card.Text>
                </Card.Body>
            </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <OurCompany /> */}
      <OurClient />

      {/* Support Us */}
      <SupportUs />

      {/* Testimonial */}
      <Testimonial />

      {/* footer */}
      {/* <Footer /> */}
    </>
  );
}

export default Banner;
