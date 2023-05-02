import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const onSignoutHandler = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2 text-center">
          <button className="btn btn-info" onClick={onSignoutHandler}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
