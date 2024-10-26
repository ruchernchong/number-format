/**
 * Map the value of a number to its named value
 *
 * @param number - The number to format
 * @param min - Minimum threshold for formatting (defaults to 1000)
 * @throws If input is not a valid number
 */
export const numberFormat = (number: number, min: number = 1e3): string => {
  // Basic input validation
  if (!Number.isFinite(number)) {
    throw new Error("Input must be a valid number");
  }

  // Handle negative numbers
  const isNegative = number < 0;
  const absoluteNumber = Math.abs(number);

  if (absoluteNumber >= min) {
    const units: string[] = ["k", "M", "B", "T"];
    const order: number = Math.floor(Math.log(absoluteNumber) / Math.log(1000));
    const unitName: string = units[Math.min(order - 1, units.length - 1)];
    const num: number = Number((absoluteNumber / 1000 ** order).toFixed(2));

    return `${isNegative ? "-" : ""}${num}${unitName}`;
  }

  return `${isNegative ? "-" : ""}${absoluteNumber.toLocaleString()}`;
};

export default numberFormat;
