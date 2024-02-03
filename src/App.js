import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Banner/Home";
// react router dom
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import ContactUs from "./components/Pages/ContactUs";
import AboutUs from "./components/Pages/AboutUs";
import Topbar from "./components/Home/Navbar/Topbar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Pages/Projects"
import OurService from './components/Pages/OurServices'
import Faqs from './components/Pages/Faqs';

import Partners from './components/Pages/Partners';
import Blogs from './components/Pages/Blogs';

function App() {
  return (
    <Router>
      <Topbar /> 
      <div style={{paddingTop:"50px"}}>
      <Routes>
        <Route path="/" exact element={<Home />}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/partners' element={<Partners />}/>
          <Route path='/blogs' element={<Blogs />}/>
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
