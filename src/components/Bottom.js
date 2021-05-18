import React from "react";
import "../styles/Bottom.css";

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
