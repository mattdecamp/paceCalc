export default function Button({children, onClick}) {
  return (
    <button type="button" role="button" onClick={onClick}>
      {children}
    </button>
  )
}

