import React, { useState } from "react";


const withCount = (OrigComp) => (props) => {
  console.log(' IN With COUNTER',props)
  const [count, setCount] = useState(0);

  const onIncrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <OrigComp count={count} onIncrementHandler={onIncrementHandler} name={props.name} />
    </div>
  );
};

export default withCount;




// const withCount = (PrevComp) => {
//   function NewComp() {
//     return (
//       <div>
//         <PrevComp />
//       </div>
//     );
//   }
//   return NewComp;
// };