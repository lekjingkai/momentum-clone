import React from "react";
import "../styles/Top.css";

const Top = (props) => {
  return (
    <div className="top-row">
      <div className="top-left">{props.left}</div>
      <div className="top-right">{props.right}</div>
    </div>
  );
};

export default Top;
