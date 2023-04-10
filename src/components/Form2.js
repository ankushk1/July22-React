import React from "react";
import { useForm } from "../utils/customHooks";

const Form2 = () => {
  const { formValues, handleFormChange } = useForm();

  return (
    <div className="mt-5">
      <form>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={(event) => handleFormChange(event)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formValues.password}
          onChange={(event) => handleFormChange(event)}
        />
      </form>
    </div>
  );
};

export default Form2;
