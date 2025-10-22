import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/About";
import Service from "./components/pages/Services";
const App = () => {
  return (
   
    <Router>
     
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Service/>} />
      </Routes>
    </Router>
  );
};

export default App;
