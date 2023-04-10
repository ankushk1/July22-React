import React from "react";
import { useState } from "react";
import { useForm } from "../utils/customHooks";

const FormComp = () => {
  // const [userInfo, setUserInfo] = useState({
  //   firstname: "",
  //   lastname: "",
  //   password: ""
  // });

  // const handleChange = (e) => {
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  // };

  const { formValues, handleFormChange } = useForm();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={formValues.firstname}
          onChange={(event) => handleFormChange(event)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={formValues.lastname}
          onChange={(event) => handleFormChange(event)}
        />
        <input
          type="text"
          placeholder="Password"
          value={formValues.password}
          name="password"
          onChange={(event) => handleFormChange(event)}
        />
      </form>

      <div
        style={{
          marginTop: "50px"
        }}
      >
        First name - {formValues.firstname}
      </div>
      <div>Last name - {formValues.lastname}</div>
      <div>Pass - {formValues.password}</div>
    </div>
  );
};

export default FormComp;
