import React from "react";
import "../styles/Links.css";
import "../styles/TextBubble.css";
import TextBubble from "./TextBubble";
import { useState, useEffect, useRef } from "react";

const Links = () => {
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
    <div ref={ref} className="linksContainer">
      <p className="links-btn" onClick={() => setShowBubble(!showBubble)}>
        <i class="fa fa-link" aria-hidden="true"></i>Links
      </p>
      <TextBubble
        todoTextBubble={`speech-bubble top-speech-bubble link-bubble ${
          showBubble ? "top-bubble-show" : ""
        }`}
      >
        <p className="links-bubble-content">In Progress</p>
      </TextBubble>
    </div>
  );
};

export default Links;
