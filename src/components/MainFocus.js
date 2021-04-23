import React from "react";
import "../styles/MainFocus.css";
import { useState, useEffect } from "react";

const MainFocus = () => {
  const [title, setTitle] = useState("");
  const [todayGoal, setTodayGoal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [fade, setFade] = useState(false);
  const [fadeGoalHover, setFadeGoalHover] = useState(false);

  const [disableInput, setDisableInput] = useState(false);

  const fadeDuration = 600;

  const changeDiv = () => {
    setDisableInput(!disableInput);
    setFade(!fade);
    setTimeout(() => {
      setSelected(!selected);
      setTodayGoal(false);
    }, fadeDuration);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (title != "") {
        setDisableInput(!disableInput);
        setFade(!fade);
        setTimeout(() => {
          setSelected(!selected);
        }, fadeDuration);
      }
    }
  };

  const clearGoal = () => {
    setTodayGoal(!todayGoal);
  };

  return (
    <div className="mainFocusContainer">
      {selected === false && (
        <div className={`${fade ? "fadeOutAnim" : "fadeInAnim"}`}>
          <p>What is your main focus for today?</p>
          <input
            onChange={(event) => setTitle(event.target.value)}
            onKeyPress={handleKeyPress}
            disabled={disableInput}
          ></input>
        </div>
      )}
      {selected === true && (
        <div
          className={`${fade ? "fadeInAnim" : "fadeOutAnim"}`}
          onMouseOver={() => setFadeGoalHover(true)}
          onMouseOut={() => setFadeGoalHover(false)}
        >
          <p>Today's Goal</p>
          <div className="todayGoalContainer">
            <label
              className={`checkmarkContainer ${
                fadeGoalHover ? "fadeIn" : "fadeOut"
              }`}
            >
              <input type="checkbox" onClick={clearGoal} />
              <span class="checkmark"></span>
            </label>
            <p
              className={`goalText ${todayGoal ? "strikethroughGoalText" : ""}`}
            >
              {title}
            </p>
            <button
              className={`cancelBtn ${todayGoal ? "rotate" : ""} ${
                fadeGoalHover ? "fadeIn" : "fadeOut"
              }`}
              onClick={changeDiv}
            >
              <i className="fa fa-times icon"></i>
            </button>
          </div>
          <p className={`goalSuccessText ${todayGoal ? "fadeInOutAnim" : ""}`}>
            Nicely done!
          </p>
        </div>
      )}
    </div>
  );
};

export default MainFocus;
