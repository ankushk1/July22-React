import React, { useState } from "react";

const FuncStateComponent = () => {
  const [number, setNumber] = useState(() => ({
    count: 1,
    count2: 2
  }));

  // const [number, setNumber] = useState(() => {
  //   return {
  //     count: 1,
  //     count2: 2
  //   };
  // });

  const handleIncrement = () => {
    console.log("handleIncrement called");
    setNumber({ ...number, count: number.count + 1 });
  };

  const handleDecrement = () => {};

  const handleIncrement2 = () => {
    setNumber({ ...number, count2: number.count2 + 1 });
  };

  return (
    <div>
      <div>
        Count 1 - {number.count} <br />
        Count 2 - {number.count2}
      </div>
      <div>
        <button onClick={handleIncrement}>Increase Num 1</button>
        <button onClick={() => handleDecrement()}>Decrease Num 1</button>
        <button onClick={() => handleIncrement2()}>Increase Num 2</button>
      </div>
    </div>
  );
};

export default FuncStateComponent;
