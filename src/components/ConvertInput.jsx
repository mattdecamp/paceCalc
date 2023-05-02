export default function ConvertInput({ measurement, onChange, value }) {
  // TODO You need to rewrap this input so the value attribute can apply directly to the input tag as opposed to the container div
  return (
    <div className="c-input distance converter">
      <label htmlFor={measurement} style={{ textTransform: "capitalize" }}>
        {measurement}:
        <input
          type="number"
          value={value}
          onChange={onChange}
          name={measurement}
          id={measurement}
          placeholder="0"
        />
      </label>
    </div>
  );
}
