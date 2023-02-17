export function GridColsPlaceholder() {
  return (
    <div aria-hidden="true" className="grid__cols-placeholder">
      {/* Grid for 24 hours */}
      {new Array(24).fill(0).map((_, index) => (
        <div key={index} className="grid__col" />
      ))}
    </div>
  );
}
