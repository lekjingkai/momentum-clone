import React from 'react'
import '../styles/Links.css'
import TextBubble from './TextBubble'
import { useState, useEffect, useRef } from "react";

const Links = () => {
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
        <div className="linksContainer">
            <p ref={ref} className="links"                       onClick={changeDiv}><i class="fa fa-link" aria-hidden="true"></i> Links</p>
            {/* {showSetting === true && ( */}
                <TextBubble todoTextBubble={`speech-bubble top-speech-bubble link-bubble ${showSettingBubble ? "top-bubble-show" : ""}`}>
                <p className="links-bubble-content">In Progress</p>
                </TextBubble>
      {/* )} */}
        </div>
    )
}

export default Links
