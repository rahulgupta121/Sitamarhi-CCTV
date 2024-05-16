import "./topbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../../assets/main/SITAMARHI1.png'

 const Topbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{position:"fixed",zIndex:"1000",width:"100%"}}>
      <Container fluid>
        <Navbar.Brand href="#">
        <img className='brand-logo img-fluid' 
          src={logo}
        />
        </Navbar.Brand>
        <button className='contact-no bg-danger p-2'><a href='tel:8219956151' className='contact-no-btn'>Call To: 8219956151</a></button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link className='navbar-link'><Link to="/">Home</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="about-us">About Us</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="/our-service">Our Services</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="/projects">Projects</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="/faqs">FAQs</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="/blogs">Blog</Link></Nav.Link>
            <Nav.Link className='navbar-link'><Link to="/partners">Partners</Link></Nav.Link>
            <Nav.Link className='navbar-link' ><Link to="contact-us">Contact Us</Link></Nav.Link>
          </Nav>  

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Topbar