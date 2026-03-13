export default function PaceInput({ paceInput, labelName, placeholder }) {
  return (
    <>
      <div className="c-input">
        <label htmlFor={paceInput}>
          <input name={paceInput} id={paceInput} placeholder={placeholder} />
          <br />
          {labelName}
        </label>
      </div>
    </>
  );
}
