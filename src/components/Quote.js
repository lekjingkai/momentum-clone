import React from "react";
import "../styles/Quote.css";
import { useState, useEffect } from "react";

const Quote = () => {
  const [hoverQuote, setHoverQuote] = useState(false);

  return (
    <div className="test">
      <div className="quoteContainer">
        <div
          className="hoverQuote"
          onMouseOver={() => setHoverQuote(true)}
          onMouseOut={() => setHoverQuote(false)}
        >
          <p className={`quote ${hoverQuote ? "slideUp" : ""}`}>
            Quote Here Random Quote etc etc etc
          </p>
        </div>
      </div>
      <div>
        <div className="quoteContainer">
          <div
            className="hoverQuote"
            onMouseOver={() => setHoverQuote(true)}
            onMouseOut={() => setHoverQuote(false)}
          >
            <p className={`author ${hoverQuote ? "slideDownFadeIn" : ""}`}>
              Author here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
