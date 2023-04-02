import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/";
import { Contact } from "./components/pages/contact/";
import { Projects } from "./components/pages/projects/";
import Footer from "./components/Footer";
import Navbar from "./components/navigation/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
