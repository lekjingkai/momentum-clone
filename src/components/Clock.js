import React from "react";
import "../styles/Clock.css";
import { CurrentTime } from "./TimeFunction";

const Clock = () => {
  const timer = CurrentTime(new Date());

  return (
    <div>
      <h1 className="clock">
        {timer
          .toLocaleTimeString([], { hour12: true, hour: "2-digit", minute: "2-digit" })
          .replace("AM", "")
          .replace("PM", "")
          .replace("am", "")
          .replace("pm", "")
          .replace(" ", "")
          .replace(/^0(?:0:0?)?/, "")}
      </h1>
      {/* <h1 className="clock">{timer.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }).replace(/^0(?:0:0?)?/, '')}</h1> */}
    </div>
  );
};

export default Clock;
