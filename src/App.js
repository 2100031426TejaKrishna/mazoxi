import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Choose from "./components/Choose";
import Page from "./components/Page";
import Content from "./components/Content";
import Marketing from "./components/marketing";
import Work from "./components/work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/page" element={<Page />} />
        <Route path="/content" element={<Content />} />
        <Route path="/market" element={<Marketing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />




      </Routes>
    </Router>
  );
}

export default App;
