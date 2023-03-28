import React from "react";
import { useContext } from "react";
import { messageContext } from "../../App";
const ComponentB = () => {

  const message = useContext(messageContext)

  return (
    <div>
      ComponentB
      {/* <messageContext.Consumer>
        {(val) => {
          return <h3>{val}</h3>;
        }}
      </messageContext.Consumer> */}
      <h3>{message}</h3>
    </div>
  );
};

export default ComponentB;
