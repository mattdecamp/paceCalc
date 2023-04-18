export default function PaceOutput() {
  return (
    <>
      <label htmlFor="result">Pace:</label>
      <div id="output--holder">
        <output name="result" id="result" value="00:00:00">
          00:00:00
        </output>
      </div>
      <span id="paceMeasure">/ mi</span>
    </>
  );
}
