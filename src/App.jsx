import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/About";
import Service from "./components/pages/Services";
import OurPromise from "./components/pages/OurPromise";
const App = () => {
  return (
   
    <Router>
     
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/our-promise" element={<OurPromise/>} />
      </Routes>
    </Router>
  );
};

export default App;
