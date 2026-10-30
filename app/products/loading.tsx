export default function ProductsLoading() {
  const skeletonRows = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Products</h1>
      <p role="status">Loading products...</p>
      <ul>
        {skeletonRows.map((row) => (
          <li key={row} className="skeleton" />
        ))}
      </ul>
    </>
  );
}
