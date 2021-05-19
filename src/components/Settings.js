import React from "react";
import "../styles/Settings.css";
import TextBubble from "./TextBubble";
import { useState, useEffect, useRef } from "react";

const Settings = () => {
  const [hoverRotate, sethoverRotate] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const ref = useRef(null);

  //closes bubble if click anywhere outside ref
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowBubble(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div ref={ref} className="settingContainer">
      <p
        className={`setting ${hoverRotate ? "rotateSetting" : ""}`}
        onMouseOver={() => sethoverRotate(true)}
        onMouseOut={() => sethoverRotate(false)}
        onClick={() => setShowBubble(!showBubble)}
      >
        <i class="fa fa-cog" aria-hidden="true"></i>
      </p>
      <TextBubble
        todoTextBubble={`speech-bubble bottom-speech-bubble setting-bubble ${
          showBubble ? "bottom-bubble-show" : ""
        }`}
      >
        <p className="setting-bubble-content">In Progress</p>
      </TextBubble>
    </div>
  );
};

export default Settings;
