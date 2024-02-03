import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <>
    <footer className='bg-dark py-5'>
        <Container>
            <Row className="" style={{color: "white"}}>
                <Col lg={4}>
                <h5>About TouchTec</h5>
                <p>TouchTec is a leading company that provides Security Solutions with high 
                assurance biometrics solutions to improve security and efficiencies for identity management, access to critical facilities, intelligence analysis, guest worker programs, and national identity programs.
                </p>
                </Col>
                <Col lg={4}>
                <h5>Our Services</h5>
                <ul>
                    <li><Link className='comm-li'>CCTV Surveillance System</Link></li>
                    <li><Link className='comm-li'>HD IP CCTV Cameras</Link></li>
                    <li><Link className='comm-li'>Biometric Attendance & Access Control System</Link></li>
                    <li><Link className='comm-li'>Fire Alarm & Detection System</Link></li>
                    <li><Link className='comm-li'>Home Automation System</Link></li>
                    <li><Link className='comm-li'>Other Services</Link></li>
                    <li><Link className='comm-li'>Annual Maintenance Contract</Link></li>
                    <li><Link className='comm-li'>Installation Services</Link></li>
                    <li><Link className='comm-li'>24/7 Online Support</Link></li>
                </ul>
                </Col>
                <Col lg={4}>
                <h5>Quick Links</h5>
                <ul>
                    <li>
                        <Link className='comm-li'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className='comm-li'>Request A Quote</Link>
                    </li>
                </ul>
                <h5>Locations</h5>
                <ul>
                    <li>
                        <Link className='comm-li'>Location 1</Link>
                    </li>
                    <li>
                        <Link className='comm-li'>Location 2</Link>
                    </li>
                </ul>
                </Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}
