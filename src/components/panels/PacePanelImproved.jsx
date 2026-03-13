import { useState, useRef } from "react";
import PaceInput from "../PaceInput";
import Button from "../Button";
import PaceOutput from "../PaceOutput";
// import WarningMessage from "../WarningMessage";

export default function PacePanel() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mileage, setMileage] = useState(0);
  // const [showWarning, setShowWarning] = useState(false);
  const mileageRef = useRef(null);
  const resultRef = useRef(null);

  function handlePaceCalc() {
    const currentHours = parseFloat(hours) || 0;
    const currentMinutes = parseFloat(minutes) || 0;
    const currentSeconds = parseFloat(seconds) || 0;
    const currentMileage = parseFloat(mileage) || 0;

    if (currentMileage === 0) {
      // setShowWarning(true);
      mileageRef.current.focus();
      return;
    } else {
      setShowWarning(false);
    }

    const secondsPerMile =
      (currentSeconds + currentMinutes * 60 + currentHours * 60 * 60) /
      currentMileage;
    const paceHours = Math.floor(secondsPerMile / 3600);
    const timeLeft = secondsPerMile - paceHours * 3600;
    const minutesDecimal = timeLeft / 60;
    const paceMinutes = Math.floor(minutesDecimal);
    const paceSeconds = Math.round((minutesDecimal % 1) * 60);
    const pace =
      paceHours.toFixed(0).padStart(2, "0") +
      ":" +
      paceMinutes.toFixed(0).padStart(2, "0") +
      ":" +
      paceSeconds.toFixed(0).padStart(2, "0");

    resultRef.current.value = pace;
    console.log(currentHours, currentMinutes, currentSeconds, currentMileage);
    console.log("Pace: " + paceHours, paceMinutes, paceSeconds);
  }

  function handleReset() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMileage("00:00:00");
  }
}
