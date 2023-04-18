export default function TabList() {
  return (
    <div role="tablist" aria-label="Toolbar">
      <button role="tab" aria-selected="true" id="pace">
        Pace
      </button>
      <button role="tab" aria-selected="false" id="converter">
        Conversion
      </button>
    </div>
  );
}