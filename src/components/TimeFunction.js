import { useState, useEffect } from "react";

export function CurrentTime(currentDate) {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

export function CurrentHour(currentDate) {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date().getHours());
  }

  return date;
}
