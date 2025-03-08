import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import './main.css'
import {Link } from "react-router-dom"
function SupportUs() {
  return (
    <>
    <section className='my-5 py-3 bg-danger'>
        <Container>
        <Row className="">
        <Col md={8}>
        <h1 className='text-white'>Contact With Us For Support</h1>
        <p className='text-white'>We provide 24 X 7 support</p>
        </Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
        <Button className='get-us-btn'><Link to="/contact-us" className='get-us'>Get Us</Link></Button>
        </Col>
        </Row>
        </Container>
    </section>
    </>
  )
}

export default SupportUs