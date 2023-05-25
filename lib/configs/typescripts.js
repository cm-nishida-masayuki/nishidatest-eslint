module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parseOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
};
