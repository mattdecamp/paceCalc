export default function Tab({ children, onClick, isActive}) {
  return (
    <button type="button" role="tab" onClick={onClick} className={ isActive ? 'tab--active' : ''}>
      {children}
    </button>
  );
}