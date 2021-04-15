import React from "react";
import "../styles/MainFocus.css";
import { useState, useEffect } from "react";

import { animated, useTransition } from "react-spring";

const MainFocus = (props) => {
  const [title, setTitle] = useState("");
  const [todayGoal, setTodayGoal] = useState(false);
  // const [selected, setSelected] = useState(0)
  const [selected, setSelected] = useState(false);

  const changeDiv = () => {
    setSelected((state) => !state);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // setSelected(state => !state)

      if (title != "") {
        setSelected(!selected);
      }
    }
  };

  //   const transitions = useTransition(props.active, null, {
  //     from: { position: "absolute", opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 }
  //   });

  return (
    <div className="mainFocusContainer">
      {/* <button onClick={() => setSelected(0)}>btn for hi</button>
         <button onClick={() => setSelected(1)}>btn for hi2</button>
         {(selected === 0) && <p>hi</p>}
            {(selected === 1) && <p>hi2</p>} */}
      {/* <button onClick={() => setSelected(state => !state)}>btn for hi</button> */}
      {/* {(selected === false) && <p>hi</p>}
            {(selected === true) && <p>hi3</p>} */}
      {selected === false && (
        <div>
          <p>What is your focus for today?</p>
          <input
            onChange={(event) => setTitle(event.target.value)}
            onKeyPress={handleKeyPress}
          ></input>
        </div>
      )}
      {selected === true && (
        <div>
          <p>Today's goal</p>
          <div className="todayGoalContainer">
          <input className="checkbox" type="checkbox"></input>
          <p>{title}</p>
          <button className="cancelBtn" onClick={changeDiv}><i className="fa fa-times"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFocus;
