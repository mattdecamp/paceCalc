export default function PaceInput({paceInput, labelName, placeholder}) {
  
  
  return (
    <>
      <div className="c-input">
        <input
          // autoFocus
          // type="number"
          // inputMode="numeric"
          name={paceInput}
          id={paceInput}
          htmlFor={paceInput}
          placeholder={placeholder}
          // onChange={(e) => setHours(e.target.value)}
          // onBlur={blurZeroes}
        />
        <label htmlFor={paceInput}>{labelName}</label>
      </div>
      {/* <div className="c-input">
        <input
          // type="number"
          // inputMode="numeric"
          name="minutes"
          id="minutes"
          placeholder=":00:"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          // onBlur={blurZeroes}
        />
        <label htmlFor="minutes">Minutes</label>
      </div>
      <div className="c-input">
        <input
          // type="number"
          // inputMode="numeric"
          name="seconds"
          id="seconds"
          placeholder=":00"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          // onBlur={blurZeroes}
        />
        <label htmlFor="seconds">Seconds</label>
      </div>
      <div className="c-input distance">
        <div id="input--distance">
          <input
            type="number"
            inputMode="decimal"
            step="any"
            name="mileage"
            id="mileage"
            placeholder="0"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            // onBlur={blurZeroes}
          />
          <select id="distanceMeasure" name="distance">
            <option value="miles">Miles</option>
            <option value="kilometers">Kilometers</option>
            <option value="yards">Yards</option>
          </select>
        </div>
        <label htmlFor="mileage">Mileage</label>
      </div> */}
    </>
  );
}
