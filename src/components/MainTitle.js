import React from "react";
import NameField from "./NameField";
import { useState, useEffect } from "react";
import { CurrentHour } from "./TimeFunction";

const MainTitle = () => {
  const [firstName, setFirstName] = useState(localStorage.getItem("name") || "");
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [greeting, setGreeting] = useState("");

  const hour = CurrentHour(new Date().getHours());

  useEffect(() => {
    //changes greeting based on the current time
    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [hour]);

  //set the localstorage name on name change
  useEffect(() => {
    localStorage.setItem("name", firstName);
  }, [firstName]);

  //captures the name input value and sets it
  const changeName = (e) => {
    setFirstName(e);
  };

  return (
    <div>
      <NameField
        value={firstName}
        inputChange={(e) => changeName(e.target.value)}
        doubleClick={() => setFirstNameInput(true)}
        blur={() => setFirstNameInput(false)}
        active={firstNameInput}
      >
        <p className="greetingText">{greeting},&nbsp;</p>
      </NameField>
    </div>
  );
};

export default MainTitle;
