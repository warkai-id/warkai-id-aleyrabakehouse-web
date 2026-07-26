/**
 * Formats an integer rupiah value to a localized string.
 * @param price - Integer price in rupiah (e.g. 25000)
 * @returns Formatted string (e.g. "Rp25.000")
 */
export function formatPrice(price: number): string {
  return `Rp${price.toLocaleString("id-ID")}`;
}
