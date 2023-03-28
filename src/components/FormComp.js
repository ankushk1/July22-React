import React from "react";
import { useState } from "react";

const FormComp = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={userInfo.firstname}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={userInfo.lastname}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          placeholder="Password"
          value={userInfo.password}
          name="password"
          onChange={(event) => handleChange(event)}
        />
      </form>

      <div
        style={{
          marginTop: "50px"
        }}
      >
        First name - {userInfo.firstname}
      </div>
      <div>Last name - {userInfo.lastname}</div>
      <div>Pass - {userInfo.password}</div>
    </div>
  );
};

export default FormComp;
