import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const intialState = {
    count: 0,
    count2: 2
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
      case "increment2":
        return { ...state, count2: state.count2 + action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      Count - {state.count} <br />
      Count2 - {state.count2} <br />
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "increment2", payload: 20 })}>
        Increase 2
      </button>
    </div>
  );
};

export default UseReducer;
