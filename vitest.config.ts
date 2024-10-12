import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.test.ts"],
    coverage: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
});
