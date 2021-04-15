import React from "react";
import "../styles/NameField.css";



const NameField = (props) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      return props.blur();
    }
  };


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
        <div onDoubleClick={props.doubleClick} className="nameText">
          {props.value}
        </div>
      )}
    </div>
  );
};

export default NameField;
