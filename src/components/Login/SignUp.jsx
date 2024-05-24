import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
const SignUp = () => {
  return (
    <>
      <section className="my-5 py-3">
          <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Sign Up</h1>
          {/* <hr className="hr-line" /> */}
        <Container>
        {/* Sign Up form */}
        <Row className="justify-content-center ">

        <Form className="w-50">
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
        </Row>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
