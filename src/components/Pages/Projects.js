import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from "../assets/projects/hospital-healthcare.jpg"
import img2 from "../assets/projects/hotels.jpg"
import img3 from "../assets/projects/manufacturing-plants.jpg"
import img4 from "../assets/projects/real-estate.jpg"
import img5 from "../assets/projects/residential.jpg"
import img6 from "../assets/projects/shopping-mall.jpg"
import img7 from "../assets/projects/social-welfare.jpg"
import img8 from "../assets/projects/transportation-projects.jpg"
import img9 from "../assets/projects/universities-projects.jpg"
const Projects = () =>{
  const dataProject =[
    {
    img: img1,
    data: "Hospital Healthcare",
  },
  {
    img: img2,
    data: "Hotels",
},
{
  img: img3,
  data: "Manufacturing Plants",
},
{
  img: img4,
  data: "Real Estate",
},
{
  img: img5,
  data: "Residential",
},
{
  img: img6,
  data: "Shopping Mall",
},
{
  img: img7,
  data: "Social Welfare",
},
{
  img: img8,
  data: "Transportation Projects",
},
{
  img: img9,
  data: "Universities Projects",
},
]
  return (
    <div>
     <section className="mt-5 py-3">
  <h1 className="text-center" style={{background: "#aab8b3", padding: "12px 0px"}}>Our Projects</h1>
  {/* <hr className="hr-line"/> */}
  <p className='text-center my-5'>Our Market Strategy is oriented toward providing high quality products and customer satisfaction for a win-win collaboration. We provide services almost in <br /> every sector throughout India.</p>
  <Container>
    <Row>
      {dataProject && dataProject.map((index, key)=>{
        return(
          <Col lg={4} className="py-3 project-img">
            <img src={index.img} className="img-fluid"/>
            <div className='project-heading'>
              <h4 className='text-center'>{index.data}</h4>
            </div>
          </Col>
        )
        }
      )}
    </Row>
  </Container>
  </section>
  </div>
  )
}

export default Projects