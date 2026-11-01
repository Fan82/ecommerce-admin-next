export default function ProductsLoading() {
  const skeletonRows = [1, 2, 3, 4, 5];

  return (
    <>
      <p role="status" className="visually-hidden">
        Loading products...
      </p>
      <div className="skeleton" style={{ width: 280, height: 56 }} />
      <div className="stat-grid">
        {[1, 2, 3, 4].map((card) => (
          <div key={card} className="skeleton" style={{ height: 112 }} />
        ))}
      </div>
      <div className="card card--flush">
        {skeletonRows.map((row) => (
          <div key={row} className="skeleton" style={{ height: 60, margin: 6 }} />
        ))}
      </div>
    </>
  );
}
