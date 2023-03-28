import React from "react";
import { useState } from "react";

const PropsComp = (props) => {
  console.log(props);
  const { name, age, bool, arr, func, children } = props;

  // const [userAge, setUserAge] = useState(age);

  return (
    <div>
      {bool ? (
        <>
          The user name is {name} and he is {age} years old
        </>
      ) : (
        <>Not Rendered</>
      )}
      {children()}
    </div>
  );
};

export default PropsComp;
