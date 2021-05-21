import React from "react";
import "../styles/NameField.css";
import { useState, useEffect } from "react";

const NameField = (props) => {
  const [nameBlank, setNameBlank] = useState(false);

  //calls props.blur on enter which changes the name input into text
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      return props.blur();
    }
  };

  useEffect(() => {
    //sets the bottom border to white if name is black to indicate a field to be entered
    if (props.value === "") {
      setNameBlank(true);
    } else {
      setNameBlank(false);
    }
  }, [props.value]);

  return (
    <div className="namefieldContainer">
      <div>{props.children}</div>
      {props.active ? (
        <div>
          <input value={props.value} onChange={props.inputChange} onKeyPress={handleKeyPress} onBlur={props.blur} autoFocus />
        </div>
      ) : (
        <div onClick={props.doubleClick} className={`nameText ${nameBlank ? "nameText-blank" : ""}`}>
          {props.value}
        </div>
      )}
    </div>
  );
};

export default NameField;
