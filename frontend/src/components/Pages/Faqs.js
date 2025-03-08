import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion"
function Faqs() {
  return (
    <>
    <section className="mt-5 py-3">
  <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Frequently Asked Questions</h1>
  <hr className="hr-line"/>
  <Container>
    <p className='text-center'>With the help of our outstanding team, we lead the way for innovative safety, security and video surveillance solutions for our clients and we pride ourselves <br /> on delivering exceptional customer service.</p>
  {/* claps start */}
  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header class="acc-head"><p className='font-weight-bold'>What is CCTV ?</p></Accordion.Header>
        <Accordion.Body>
        <p>
        Closed Circuit Television (CCTV) also called as video surveillance is a system where the circuit in which the video is transmitted is closed and all the elements (camera, display monitors, recording devices) are directly connected. This is unlike broadcast television where any receiver that is correctly tuned can pick up and display or store the signal. Security cameras using scrambled radio waves are in fact subject to common carrier tariffs and FCC conditions of service. These signals are transmitted to digital video recorder (DVR) systems that can display video on monitor and back up data automatically.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><p className='font-weight-bold'>What is CCTV Used For ?</p></Accordion.Header>
        <Accordion.Body>
        <p>
        The most widely known use of CCTV is in security camera systems. They’ve been found for years in areas like large retail shops, banks, and government institutions. Thanks to reduced costs in the manufacture of cameras and video recording equipment, camera systems are becoming more and more commonplace in smaller businesses, and even private homes.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><p className='font-weight-bold'>What are the other Uses of CCTV?</p></Accordion.Header>
        <Accordion.Body>
        <p>CCTV has become ubiquitous in large cities, along major highways, and areas that host large events. On streets and roads it is often used in traffic law enforcement, but is also often used in monitoring traffic patterns, allowing emergency services to react quickly to accidents and for maintenance departments to better plan necessary construction projects. In hotels, stadiums, and convention centers, CCTV is often used in private television networks, broadcasting sporting events or special events throughout their facilities.
        </p>
        <p>
        Most airports and train stations throughout the world have installed security cameras connected to CCTV systems with the goal of combating terrorism. These video feeds are constantly monitored by local and international law enforcement agencies in an effort to keep travelers safe.
        </p>
        </Accordion.Body>
      </Accordion.Item>

        <Accordion.Item eventKey="3">
        <Accordion.Header><p className='font-weight-bold'>What are different types of CCTV Cameras?</p></Accordion.Header>
        <Accordion.Body>
        <p>Any camera that broadcasts a signal can be attached to a CCTV system, whether its wired or wireless, but they are most often associated with high-end surveillance cameras. Pan/tilt/zoom (PTZ) cameras allow a user to remotely control a camera. The type of lens used will depend on the application and area the camera will be installed.
        </p>
        {/* <br></br> */}
        <p>
        Fixed aperture lenses cannot be adjusted for distance or lighting considerations. Lower in cost than other lenses, these are usually sufficient for indoor installations where lighting will be consistent.
        </p>
        {/* <br></br> */}
        <p>There are 2 types of adjustable iris lenses. Manual iris lenses can be adjusted for changes in lighting conditions, but it must be done manually. Auto iris camera lenses can sense changes in lighting in the area they observe and will automatically make adjustments so they provide the best picture possible. These are usually the best choice for outdoor installations.
        </p>
        {/* <br /> */}
        <p>Manual zoom lenses allow you to adjust the focus area on a camera by hand. If you want to be able to change focus remotely, motorized zoom lenses are also available, but more costly. A third type of zoom lens, automatic zoom, can automatically focus on objects moving within their view.
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  {/* claps ends */}
  </Container>
  </section>
    </>
  )
}

export default Faqs