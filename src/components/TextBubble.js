import React from "react";
import "../styles/TextBubble.css";

const TextBubble = (props) => {
  return <div className={props.todoTextBubble}>{props.children}</div>;
};

export default TextBubble;
