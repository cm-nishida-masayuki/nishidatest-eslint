module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "./index",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
};
