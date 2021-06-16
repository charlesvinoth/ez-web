module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  rootDir: "./src",
  testMatch: ["**/*.spec.{j,t}s?(x)"],
  setupFilesAfterEnv: ["../jest-setup.js"],
};
