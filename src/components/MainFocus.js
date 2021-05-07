import React from "react";
import "../styles/MainFocus.css";
import { useState, useEffect } from "react";



const MainFocus = () => {
  // const [title, setTitle] = useState("");
  // if(localStorage.getItem('todaygoal') === null){
  //   const test2 = ''
  // }
  // else{
  //   const test2 = JSON.parse(localStorage.getItem('todaygoal'))
  //   const ggg = test2.goal
  // }

  const checkLSGoal = (e) => {
  if(e === null){
    return ''
  }
  else{
    const test2 = JSON.parse(e)
    return(test2.goal)
  }
  }

  // const test2 = JSON.parse(localStorage.getItem('todaygoal'))
  // const ggg = test2.goal
  const [title, setTitle] = useState(checkLSGoal(localStorage.getItem('todaygoal')));
  const [todayGoal, setTodayGoal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [fade, setFade] = useState(false);
  const [fadeGoalHover, setFadeGoalHover] = useState(false);

  const [disableInput, setDisableInput] = useState(false);

  const fadeDuration = 600;

  useEffect(() => {
    // localStorage.setItem('todaygoal', title);
    if(checkLSGoal(localStorage.getItem('todaygoal')) !== ''){
      if(JSON.parse(localStorage.getItem('todaygoal')).cleared == false){
        setDisableInput(!disableInput);
        setFade(!fade);
        setTimeout(() => {
          setSelected(!selected);
        }, fadeDuration);
      }
    }

      }, []);

      

  const changeDiv = () => {
    setDisableInput(!disableInput);
    setFade(!fade);
    // localStorage.setItem('todaygoal', '')
    localStorage.removeItem('todaygoal')
    setTimeout(() => {
      setSelected(!selected);
      setTodayGoal(false);

    }, fadeDuration);
  };

  //on enter, changes the input into the task
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (title != "") {
        setDisableInput(!disableInput);
        setFade(!fade);
        const todayGoal2 = {
          goal: title,
          cleared: false,
      }
      // alert(new Date())
      localStorage.setItem('todaygoal', JSON.stringify(todayGoal2));
// console.log(localStorage.getItem('todaygoal'))

        setTimeout(() => {
          setSelected(!selected);
        }, fadeDuration);
      }
    }
  };

  const clearGoal = () => {
    setTodayGoal(!todayGoal);
    const boolClear = JSON.parse(localStorage.getItem('todaygoal')).cleared 
    const todayGoal2 = {
      goal: title,
      cleared: !boolClear,
  }
  localStorage.setItem('todaygoal', JSON.stringify(todayGoal2));
  // console.log(localStorage.getItem('todaygoal'))
  };

  // const setGoal = (e) => {
  //   setTitle(e)
  //   localStorage.setItem('todaygoal', title);
  //   console.log(localStorage.getItem('todaygoal'))
  // };

  // useEffect(() => {
  //   localStorage.setItem('todaygoal', title);
  //     }, [title]);


// useEffect(() => {
//   if(localStorage.getItem('todaygoal') != ''){
//     setSelected(true)
//   }
//     });
console.log(localStorage.getItem('todaygoal'))

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
