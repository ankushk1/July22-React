import React, { useMemo, useState } from "react";

const numMultiple = (n) => {
  for (let index = 0; index < 1000000000; index++) {}
  return n * 2;
};

const UseMemoHook = () => {
  const [num, setNum] = useState(1);

  const [num2, setNum2] = useState(5);

  const multipleVal = useMemo(() => {
    return numMultiple(num);
  }, [num]);

  return (
    <div className="text-center">
      <div>Rendered {num} times</div>
      <div>
        <button className="btn btn-secondary" onClick={() => setNum(num + 1)}>
          Re render
        </button>
      </div>

      {multipleVal}

      <br />
      <br />

      <div>
        <button className="btn btn-success" onClick={() => setNum2(num2 + 5)}>
          Num2 Inc
        </button>
      </div>
      {num2}
    </div>
  );
};

export default UseMemoHook;
