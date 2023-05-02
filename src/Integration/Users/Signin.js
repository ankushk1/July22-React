import React from "react";
import { useForm } from "../../utils/customHooks";
import { signin } from "../../utils/ApiUtils";
import { error, success } from "../../utils/toasts";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { formValues, handleFormChange } = useForm();
  const navigate = useNavigate();

  const onSignInHandler = async () => {
    const apiResponse = await signin(formValues);
    if (apiResponse?.status === 200) {
      localStorage.setItem("token", apiResponse?.data?.token);
      success(apiResponse?.data?.message);
      navigate("/products")
    } else {
      error(apiResponse?.data?.message);
    }
  };

  return (
    <>
      <div className=" text-center fs-2 my-4">Sign In</div>
      <div className="d-flex flex-column align-items-center">
        <form className="w-50">
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

        <button className="btn btn-success mt-4" onClick={onSignInHandler}>
          Signin
        </button>
      </div>
    </>
  );
};

export default Signin;
