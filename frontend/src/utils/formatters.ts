/**
 * Formats a number with comma as thousands separator
 * @param number - The number to format
 * @returns Formatted number string
 */
export const formatMileage = (number: number): string => {
  if (typeof number !== "number") {
    return String(number);
  }
  return number.toLocaleString("en-US");
};

/**
 * Formats price with currency symbol
 * @param price - The price to format
 * @param currency - Currency symbol (default: '$')
 * @returns Formatted price string
 */
export const formatPrice = (price: string | number, currency = "$"): string => {
  return `${currency}${price}`;
};

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns Capitalized string
 */
export const capitalizeFirst = (str: string): string => {
  if (typeof str !== "string") {
    return String(str);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
