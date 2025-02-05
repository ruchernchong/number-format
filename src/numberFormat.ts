export const numberFormat = (number: number, min = 1_000): string => {
  if (!Number.isFinite(number)) {
    throw new Error("Input must be a valid number");
  }

  const absoluteNumber = Math.abs(number);

  if (absoluteNumber < min) {
    return `${number.toLocaleString()}`;
  }

  const units: string[] = ["k", "M", "B", "T"];
  const order = Math.floor(Math.log10(absoluteNumber) / 3);
  const unitName = units[Math.min(order - 1, units.length - 1)];
  const num = Number((absoluteNumber / 1000 ** order).toFixed(2));

  return `${number < 0 ? "-" : ""}${num}${unitName}`;
};

export default numberFormat;
