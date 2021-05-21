import React from "react";
import "../styles/CustomCheckmark.css";
import "../styles/MainFocus.css";
import { useState, useEffect } from "react";

const MainFocus = () => {
  const [todayGoal, setTodayGoal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [fade, setFade] = useState(false);
  const [fadeGoalHover, setFadeGoalHover] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

  const fadeDuration = 600;

  //check if localstorage item exists
  const checkLSGoal = (e) => {
    if (e === null) {
      return "";
    } else {
      const LSgoal = JSON.parse(e);
      return LSgoal.goal;
    }
  };

  const [title, setTitle] = useState(checkLSGoal(localStorage.getItem("todaygoal")));

  useEffect(() => {
    // check localstorage if goal has been entered but not cleared
    if (checkLSGoal(localStorage.getItem("todaygoal")) !== "") {
      if (JSON.parse(localStorage.getItem("todaygoal")).cleared === false) {
        setDisableInput((state) => !state);
        setFade((state) => !state);
        setTimeout(() => {
          setSelected((state) => !state);
        }, fadeDuration);
      }
    }
  }, []);

  //complete goal by checking the checkbox
  const completeGoal = () => {
    setTodayGoal(!todayGoal);
    const boolClear = JSON.parse(localStorage.getItem("todaygoal")).cleared;
    const LSgoal = {
      goal: title,
      cleared: !boolClear,
    };
    localStorage.setItem("todaygoal", JSON.stringify(LSgoal));
  };

  //close the goal and reverts back to enter input
  const closeGoal = () => {
    setDisableInput(!disableInput);
    setFade(!fade);
    localStorage.removeItem("todaygoal");
    setTimeout(() => {
      setSelected(!selected);
      setTodayGoal(false);
    }, fadeDuration);
  };

  //captures the input value and change to the current goal
  const enterGoal = (event) => {
    if (event.key === "Enter") {
      if (title !== "") {
        setDisableInput(!disableInput);
        setFade(!fade);
        const LSgoal = {
          goal: title,
          cleared: false,
        };
        localStorage.setItem("todaygoal", JSON.stringify(LSgoal));
        setTimeout(() => {
          setSelected(!selected);
        }, fadeDuration);
      }
    }
  };

  return (
    <div className="mainFocusContainer">
      {selected === false && (
        <div className={`${fade ? "fadeOutAnim" : "fadeInAnim"}`}>
          <p>What is your main focus for today?</p>
          <input onChange={(event) => setTitle(event.target.value)} onKeyPress={enterGoal} disabled={disableInput}></input>
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
            <label className={`checkmarkContainer ${fadeGoalHover ? "fadeIn" : ""}`}>
              <input type="checkbox" onClick={completeGoal} />
              <span class="checkmark"></span>
            </label>
            <p className={`goalText ${todayGoal ? "strikethroughGoalText" : ""}`}>{title}</p>
            <button className={`cancelBtn ${todayGoal ? "rotate" : ""} ${fadeGoalHover ? "fadeIn" : ""}`} onClick={closeGoal}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <p className={`goalSuccessText ${todayGoal ? "fadeInOutAnim" : ""}`}>Nicely done!</p>
        </div>
      )}
    </div>
  );
};

export default MainFocus;
