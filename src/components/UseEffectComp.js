import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(5);

  // Mounting -> UseEffect only renders two times in dev and once in prod
  // Updating -> Whenever the state gets updated
  // Unmount Phase -> Whenever the component unmounts

  useEffect(() => {
    console.log("UseEffect Called");
  }, [count, count2]);

  useEffect(() => {
    console.log("useEffect 2 Called");
  }, [count2]);

  useEffect(() => {
    return () => {
      console.log("Un Mount");
    };
  }, []);

  return (
    <div>
      {console.log('Render')}
      Count - {count}
      <div>Count2 - {count2}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
      </div>
    </div>
  );
};

export default UseEffectComp;
