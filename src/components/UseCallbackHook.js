import React, { useCallback, useEffect, useState } from "react";

const reactSet = new Set();
const UseCallbackHook = () => {
  const [nums, setNums] = useState({
    count: 0,
    count2: 5
  });

  const onCountChange = () => {
    setNums({ ...nums, count: nums.count + 1 });
  };

  const onCountChange2 = useCallback(() => {
    setNums({ ...nums, count2: nums.count2 + 1 });
  }, [nums.count2]);

  reactSet.add(onCountChange2);
  console.log(reactSet);

  useEffect(() => {
    console.log("useEffect called");
  }, [onCountChange2]);

  return (
    <div>
      <div>Count - {nums.count}</div>
      <div>Count2 - {nums.count2}</div>

      <div>
        <button onClick={() => onCountChange()}>Increase 1</button>
        <button onClick={() => onCountChange2()}>Increase 2</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
