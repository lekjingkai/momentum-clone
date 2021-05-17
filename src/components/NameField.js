import React from "react";
import "../styles/NameField.css";
import { useState, useEffect } from "react";


const NameField = (props) => {
  const [nameBlank, setNameBlank] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      return props.blur();
    }
  };

  useEffect(() => {
if(props.value === ''){
  setNameBlank(true)
}else{
  setNameBlank(false)
}
  }, [props.value]);



  return (
    <div className="namefieldContainer">
      <div>{props.children}</div>
      {props.active ? (
        <input
          value={props.value}
          onChange={props.inputChange}
          onKeyPress={handleKeyPress}
          onBlur={props.blur}
          autoFocus
          className="nameInput"
        />
      ) : (
        <div onDoubleClick={props.doubleClick} className={`nameText ${nameBlank ? "nameText-blank" : ""}`}>
          {props.value}
        </div>
      )}
    </div>
  );
};

export default NameField;
