export default function ConvertInput({ measurement, onChange, value }) {
  return (
    <div className="c-input distance converter">
      <label htmlFor={measurement} style={{ textTransform: "capitalize" }}>
        <input
          type="number"
          value={value}
          onChange={onChange}
          name={measurement}
          id={measurement}
          placeholder="0"
        />
        <br />
        {measurement}
      </label>
    </div>
  );
}
