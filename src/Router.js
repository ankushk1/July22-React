import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Integration/Users/Signup";
import Signin from "./Integration/Users/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./Integration/Products/ProductList";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
