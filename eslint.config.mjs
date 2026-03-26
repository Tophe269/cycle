import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    ignores: ["coverage/**", ".next/**"],
  },
  {
    files: ["eslint.config.mjs", "jest.config.ts"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
];
