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

  //clears localstorage data based on option pressed in settings
  const clearData = (clearOption) => {
    console.log("help pls" + clearOption);
    switch (clearOption) {
      case 0:
        localStorage.removeItem("links");
        break;
      case 1:
        localStorage.removeItem("todo");
        break;
      case 2:
        localStorage.clear();
        break;
      default:
        console.log("Error");
    }
  };

  return (
    <div ref={ref} className="settingButtonContainer">
      <p
        className={`setting ${hoverRotate ? "rotateSetting" : ""}`}
        onMouseOver={() => sethoverRotate(true)}
        onMouseOut={() => sethoverRotate(false)}
        onClick={() => setShowBubble(!showBubble)}
      >
        <i className="fa fa-cog" aria-hidden="true"></i>
      </p>
      <TextBubble bubbleClassName={`speech-bubble bottom-speech-bubble setting-bubble ${showBubble ? "bottom-bubble-show" : ""}`}>
        <div>
          <div className="setting-header">
            <h3 className="setting-content">
              Settings
              <i className="fa fa-cog setting-content" aria-hidden="true"></i>
            </h3>
          </div>
          <form>
            <div className="settingContainer">
              <p className="setting-content">Clear all your links</p>
              <input onClick={() => clearData(0)} type="submit" value="Clear"></input>
            </div>
            <div className="settingContainer">
              <p className="setting-content">Clear all your todos</p>
              <input onClick={() => clearData(1)} type="submit" value="Clear"></input>
            </div>
            <div className="settingContainer">
              <p className="setting-content">Clear all your data</p>
              <input onClick={() => clearData(2)} type="submit" value="Clear"></input>
            </div>
          </form>
        </div>
      </TextBubble>
    </div>
  );
};

export default Settings;
