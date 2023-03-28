import React from "react";
import Avatar from "./Avatar";

const Card = (props) => {
  console.log(props);
  const { children } = props;
  return (
    <div>
      <div
        style={{
          border: "1px solid",
          borderRadius: "5px",
          padding: "20px",
          width: "100px",
          height: "100px"
        }}
      >
        {children}
        {/* <Avatar/> */}
      </div>
    </div>
  );
};

export default Card;
