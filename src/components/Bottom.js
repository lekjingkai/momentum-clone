import React from "react";
import "../styles/Bottom.css";

//container for the bottom contents i.e footer
const Bottom = (props) => {
  return (
    <div className="bottom-row">
      <div className="bottom-left">{props.left}</div>
      <div className="bottom-center">{props.center}</div>
      <div className="bottom-right">{props.right}</div>
    </div>
  );
};

export default Bottom;
