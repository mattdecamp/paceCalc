import { useState } from "react";
import PaceInput from "../PaceInput";
import Button from "../Button";
import PaceOutput from "../PaceOutput";

export default function PacePanel() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mileage, setMileage] = useState(0);

  function handlePaceCalc() {
    /* 
    / declare current input fields
    / if they are blank, default their values to zero,
    / with the exception of mileage, which cannot be zero
    */
    const currentHours =
        document.runCalculator.hours.value == ""
          ? 0
          : parseFloat(document.runCalculator.hours.value),
      currentMinutes =
        document.runCalculator.minutes.value == ""
          ? 0
          : parseFloat(document.runCalculator.minutes.value),
      currentSeconds =
        document.runCalculator.seconds.value == ""
          ? 0
          : parseFloat(document.runCalculator.seconds.value),
      currentMileage =
        document.runCalculator.mileage.value == ""
          ? alert("Mileage cannot be zero") // TODO turn this into warning
          : parseFloat(document.runCalculator.mileage.value),
      // calculate seconds per mile
      secondsPerMile =
        (currentSeconds + currentMinutes * 60 + currentHours * 60 * 60) /
        currentMileage,
      // calculate the number of hours per mile;
      paceHours = Math.floor(secondsPerMile / 3600),
      timeLeft = secondsPerMile - paceHours * 3600,
      // convert secondsPerMile to a minutes per mile in decimal form
      minutesDecimal = timeLeft / 60,
      // From minutesDecimal assigns everything left of the decimal point to left
      paceMinutes = Math.floor(minutesDecimal),
      // From minutesDecimal assigns everything right of the decimal point to rightDecimal
      paceSeconds = Math.round((minutesDecimal % 1) * 60);

    // add zeros to each field if needed
    function zeroes(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const pace =
      zeroes(paceHours, 0, 2) +
      ":" +
      zeroes(paceMinutes, 0, 2) +
      ":" +
      zeroes(paceSeconds, 0, 2);
    // replace error output with zeros
    if (pace === "aN:aN:aN") {
      document.runCalculator.result.value = "00:00:00";
    } else {
      document.runCalculator.result.value = pace;
    }
    console.log(currentHours, currentMinutes, currentSeconds, currentMileage);
    console.log("Pace: " + paceHours, paceMinutes, paceSeconds);
  }

  // reset input fields 
  function handleReset() {
    setHours("");
    setMinutes("");
    setSeconds("");
    setMileage("");
    document.runCalculator.hours.value = "";
    document.runCalculator.minutes.value = "";
    document.runCalculator.seconds.value = "";
    document.runCalculator.mileage.value = "";
    document.runCalculator.result.value = "00:00:00";
  }

  return (
    <article role="tabpanel" aria-labelledby="pace" id="paceWrapper">
      <form name="runCalculator" id="container">
        <div id="calculator--wrapper">
          <PaceInput
            paceInput="hours"
            value={hours}
            placeholder="0:"
            onChange={(e) => setHours(e.target.value)}
            labelName="Hours"
          />
          <PaceInput
            paceInput="minutes"
            value={minutes}
            placeholder="00:"
            onChange={(e) => setMinutes(e.target.value)}
            labelName="Minutes"
          />
          <PaceInput
            paceInput="seconds"
            value={seconds}
            placeholder=":00"
            onChange={(e) => setSeconds(e.target.value)}
            labelName="Seconds"
          />
          <PaceInput
            paceInput="mileage"
            value={mileage}
            placeholder="0"
            onChange={(e) => setMileage(e.target.value)}
            labelName="Mileage"
          />
          <div id="button--container">
            <Button onClick={handlePaceCalc}>Calculate</Button>
            <Button className="reset" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <div id="output--container">
            <PaceOutput />
          </div>
        </div>
      </form>
    </article>
  );
}
