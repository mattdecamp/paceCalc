import { useState } from "react";
import ConvertInput from "../ConvertInput";

/**
 *
 * @typedef {Object} ConvertPanelProps
 * @property {string} [miles] - input value of miles
 * @property {string} [kilometers] - input value of kilometers
 * @property {string} [yards] - input value of yards
 */

/**
 * ConvertPanel Component
 * @component
 * @returns {JSX.Element}
 */

export default function ConvertPanel() {
  const [miles, setMiles] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [yards, setYards] = useState("");
  let floatNum;

  /**
   * Handle miles input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object
   * @returns {void}
   */

  function handleMiles(e) {
    setMiles((mi) => (mi = parseFloat(e.target.value)));
    floatNum = parseFloat(e.target.value);
    setKilometers((ki) => (ki = (floatNum * 1.609).toFixed(2)));
    setYards((ya) => (ya = (floatNum * 1760).toFixed(0)));
  }

  /**
   * Handle kilometers input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object
   * @returns {void}
   */

  function handleKilometers(e) {
    floatNum = parseFloat(e.target.value);
    setKilometers(floatNum);
    setMiles((floatNum / 1.609).toFixed(2));
    setYards((floatNum * 1094).toFixed(0));
  }

  /**
   * Handle yards input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object
   * @returns {void}
   */

  function handleYards(e) {
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
