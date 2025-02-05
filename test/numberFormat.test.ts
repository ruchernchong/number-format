import { describe, expect, it } from "vitest";
import numberFormat from "../src/numberFormat";

describe("numberFormat", () => {
  it.each([
    { value: 1000, formattedValue: "1k" },
    { value: 10000, formattedValue: "10k" },
    { value: 1000000, formattedValue: "1M" },
    { value: 10000000, formattedValue: "10M" },
    { value: 1000000000, formattedValue: "1B" },
    { value: 1000000000000, formattedValue: "1T" },
  ])(
    "should return $value as $formattedValue correctly",
    ({ value, formattedValue }) => {
      expect(numberFormat(value)).toEqual(formattedValue);
    },
  );

  it.each([100, 10, 1])(
    "should return %d as its own value since it is lesser than 1e3 (1000)",
    () => {
      expect(numberFormat(100)).toEqual("100");
      expect(numberFormat(10)).toEqual("10");
      expect(numberFormat(1)).toEqual("1");
    },
  );

  it("should maintain two decimal places when needed", () => {
    expect(numberFormat(1234)).toBe("1.23k");
    expect(numberFormat(12345)).toBe("12.35k");
    expect(numberFormat(123456)).toBe("123.46k");
  });

  it("should format negative numbers below minimum threshold with comma separators", () => {
    expect(numberFormat(-999)).toBe("-999");
  });

  it("should handle edge cases correctly", () => {
    expect(numberFormat(0)).toBe("0");
    expect(numberFormat(-1000)).toBe("-1k");
    expect(() => numberFormat(Number.NaN)).toThrow();
  });
});
