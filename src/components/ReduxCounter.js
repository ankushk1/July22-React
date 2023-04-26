import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSelector, decrease, increaseByNum, increment } from "../Redux/counterSlice";

const ReduxCounter = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const globalStateCounter = useSelector(counterSelector);
  console.log(globalStateCounter);

  const onIncrement = () => {
    // dispatch(increment());
    dispatch(increaseByNum(5));
  };

  const onDecrement = () => {
    dispatch(decrease());
  };

  useEffect(() => {
    setCount(globalStateCounter);
  }, [globalStateCounter]);

  return (
    <div className="text-center">
      Count - {count}
      <div>
        <button className="btn btn-primary" onClick={onIncrement}>
          Increment
        </button>
        <button className="btn btn-success" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
