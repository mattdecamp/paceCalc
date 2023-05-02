import { useState } from "react";
import ConvertInput from "../ConvertInput";

export default function ConvertPanel() {
  const [miles, setMiles] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [yards, setYards] = useState("");
  let floatNum;
  function handleMiles(e) {
    console.log("miles work!");
    setMiles((mi) => (mi = parseFloat(e.target.value)));
    floatNum = parseFloat(e.target.value);
    setKilometers((ki) => (ki = (floatNum * 1.609).toFixed(2)));
    setYards((ya) => (ya = (floatNum * 1760).toFixed(0)));
    console.log(miles, kilometers, yards);
  }
  function handleKilometers(e) {
    console.log("kilos work!");
    floatNum = parseFloat(e.target.value);
    setKilometers(floatNum);
    setMiles((floatNum / 1.609).toFixed(2));
    setYards((floatNum * 1094).toFixed(0));
  }
  function handleYards(e) {
    console.log("yards work!");
    floatNum = parseFloat(e.target.value);
    setYards(floatNum);
    setMiles((floatNum / 1760).toFixed(2));
    setKilometers((floatNum / 1094).toFixed(2));
  }

  return (
    <div role="tabpanel" aria-labelledby="converter" id="converterWrapper">
      <form name="distanceConvert" id="container">
        <div id="calculator--wrapper">
          <ConvertInput
            value={miles || ""}
            measurement="miles"
            onChange={handleMiles}
          />
          <ConvertInput
            value={kilometers || ""}
            measurement="kilometers"
            onChange={handleKilometers}
          />
          <ConvertInput
            value={yards || ""}
            measurement="yards"
            onChange={handleYards}
          />
        </div>
      </form>
    </div>
  );
}
