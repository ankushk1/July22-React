import React, { useState } from "react";
import withCount from "./withCount";

const Hover = ({count, onIncrementHandler}) => {
  return (
    <div className="bg bg-success" onMouseOver={onIncrementHandler}>
      Count = {count}
    </div>
  );
};

export default withCount(Hover);
