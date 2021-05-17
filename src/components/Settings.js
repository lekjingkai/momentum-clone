import React from 'react'
import '../styles/Settings.css'
import TextBubble from './TextBubble'
import { useState, useEffect, useRef } from "react";

const Settings = () => {
    const [hoverRotate, sethoverRotate] = useState(false);
    const [showSettingBubble, setShowSettingBubble] = useState(false);
    const [showSetting, setShowSetting] = useState(false);

    const ref = useRef(null);

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowSetting(false);
            setTimeout(() => {
                setShowSettingBubble(false)
            });
        }
      };

    const changeDiv = () => {
        setShowSetting(!showSetting)
        setTimeout(() => {
            setShowSettingBubble(!showSettingBubble)
        });
      };

      useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      });



    return (
        <div  className="settingContainer">
            <p ref={ref} className={`setting ${hoverRotate ? "rotateSetting" : ""}`}
                      onMouseOver={() => sethoverRotate(true)}
                      onMouseOut={() => sethoverRotate(false)}
                      onClick={changeDiv}
                      >
                <i class="fa fa-cog settingIcon" aria-hidden="true"></i>
                </p>
                {showSetting === true && (
                <TextBubble todoTextBubble={`speech-bubble bottom-speech-bubble setting-bubble ${showSettingBubble ? "speech-bubble-show" : ""}`}>
                  <p className="setting-bubble-content">In Progress</p>
                </TextBubble>
      )}
                {/* <TextBubble todoTextBubble={`speech-bubble setting-bubble ${showSettingBubble ? "speech-bubble-show" : ""}`}></TextBubble> */}
        </div>
    )
}

export default Settings
