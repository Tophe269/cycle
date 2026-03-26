/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

export default async (): Promise<Config> => {
  const nextConfig = await createJestConfig({
    clearMocks: true,
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^app/(.*)$": "<rootDir>/app/$1",
    },
  })();

  return {
    ...nextConfig,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
  };
};
