export default function Tab({ children, selected, id, onClick}) {
  return (
    <button type="button" role="tab" onClick={onClick} aria-selected={selected} id={id}>
      {children}
    </button>
  );
}