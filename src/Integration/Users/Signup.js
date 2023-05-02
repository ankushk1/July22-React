import React from "react";
import { useForm } from "../../utils/customHooks";
import { signup } from "../../utils/ApiUtils";
import { Link } from "react-router-dom";

const Signup = () => {
  const { formValues, handleFormChange } = useForm();

  const onSignUpHandler = async () => {
    const apiResponse = await signup(formValues);
    console.log(apiResponse?.data?.message);
  };

  return (
    <>
      <div className=" text-center fs-2 my-4">Sign up</div>
      <div className="d-flex flex-column align-items-center">
        <form className="w-50">
          <input
            className="form-control mt-3"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formValues.firstname}
            onChange={(event) => handleFormChange(event)}
          />
          <input
            className="form-control mt-3"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formValues.lastname}
            onChange={(event) => handleFormChange(event)}
          />
          <input
            className="form-control mt-3"
            type="text"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={(event) => handleFormChange(event)}
          />
          <input
            className="form-control mt-3"
            type="password"
            placeholder="Password"
            value={formValues.password}
            name="password"
            onChange={(event) => handleFormChange(event)}
          />
        </form>

        <button className="btn btn-primary mt-4" onClick={onSignUpHandler}>
          Signup
        </button>

        <div className="fs-2 mt-4" >
          Already signed up? <Link to="/signin">Signin </Link>here
        </div>
      </div>
    </>
  );
};

export default Signup;
