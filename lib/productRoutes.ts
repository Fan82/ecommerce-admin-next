export function getProductHref(id: number): string {
  return `/products/${id}`;
}
export function parseProductId(raw: string): number | null {
  const id = Number(raw);

  if (Number.isNaN(id) || id < 1 || !Number.isInteger(id)) {
    return null;
  }
  return id;
}
