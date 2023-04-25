import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onRedirect = () => {
    // navigate("/contact", {
    //   state: 22
    // });
    navigate(2)
  };

  return (
    <div>
      Home
      <br />
      <button className="btn btn-info btn-sm" onClick={onRedirect}>
        Redirect
      </button>
    </div>
  );
};

export default Home;
