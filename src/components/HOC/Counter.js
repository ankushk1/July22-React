import React, { useState } from "react";
import withCount from "./withCount";

const Counter = ({count, onIncrementHandler, name}) => {
 
  console.log(name)
  return (
    <div>
      Count = {count}
      <div>
        <button onClick={() => onIncrementHandler()}>Increase</button>
      </div>
    </div>
  );
};

export default withCount(Counter);
