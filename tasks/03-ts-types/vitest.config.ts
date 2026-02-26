import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfig: "./tsconfig.json",
    },
    include: ["tests/**/*.test-d.ts"],
  },
});
