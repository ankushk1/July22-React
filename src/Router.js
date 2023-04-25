import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Signup from "./components/Pages/Signup";
import Navbar from "./components/Pages/Navbar";

const Router = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup/:id" element={<Signup />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
