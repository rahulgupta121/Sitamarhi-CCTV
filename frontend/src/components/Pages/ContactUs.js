import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

 const ContactUs = () => {

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return <>
  <section className="mt-5 py-3">
  <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Contact Us</h1>
  <hr className="hr-line"/>
  <Container fluid>
    <Row>
      <Col lg={6} className="contact-sec-1 text-white p-5">
      <h4>Get in touch with us & send us message today!</h4>

      <p>Secure your place with our exclusive range of Safety, Security & Surveillance Services. Our professional service is available anytime for end-to-end support.</p>
      <h5>For Order Queries</h5>
      <ul>
        <li>business@touchtec.in</li>
        <li>+91 000000000</li>
        <li>Plot No. 310, Industrial Area Phase 9, Mohali, Punjab, Pin:160062</li>
      </ul>

      <h5>For Dealer Sales & Queries</h5>
      <ul>
        <li>business@touchtec.in</li>
        <li>+91 000000000</li>
        <li>rozer@gmail.com</li>
      </ul>
      
      <h5>Technical Support</h5>
      <ul>
        <li>+91 000000000</li>
        <li>+91 000000000</li>
      
      </ul>
      </Col>

      <Col lg={6} className="contact-sec-2 p-5">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </Col>
  
    </Row>
  <Row>
  <div style={{ height: '100vh', width: '100%' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> */}
    </div>
  </Row>
  </Container>

  </section>


  {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
  </>;
};

export default ContactUs
