/**
 * Formats a number with comma as thousands separator
 * @param {number} number - The number to format
 * @returns {string} - Formatted number string
 */
export const formatMileage = (number) => {
  if (typeof number !== "number") {
    return number;
  }
  return number.toLocaleString("en-US");
};

/**
 * Formats price with currency symbol
 * @param {string|number} price - The price to format
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price, currency = "$") => {
  return `${currency}${price}`;
};

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalizeFirst = (str) => {
  if (typeof str !== "string") {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
