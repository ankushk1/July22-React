import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const onRedirect = () => {
    // navigate("/signup/100",)
    navigate(-1)
  };

  return (
    <div>
      Contact
      <br />
      {location.state}
      <button className="btn btn-info btn-sm" onClick={onRedirect}>
        Redirect
      </button>
    </div>
  );
};

export default Contact;
