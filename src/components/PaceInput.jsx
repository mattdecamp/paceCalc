export default function PaceInput({ paceInput, labelName, placeholder }) {
  return (
    <>
      <div className="c-input">
        <input
          name={paceInput}
          id={paceInput}
          htmlFor={paceInput}
          placeholder={placeholder}
        />
        <label htmlFor={paceInput}>{labelName}</label>
      </div>
    </>
  );
}
