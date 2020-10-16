module.exports = {
  preset: "jest-playwright-preset",
  reporters: ["default", "jest-junit"],
  setupFilesAfterEnv: ["./jest-debug.setup.js", "expect-playwright"],
};
