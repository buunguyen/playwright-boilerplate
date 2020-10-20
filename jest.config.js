module.exports = {
  preset: "jest-playwright-preset",
  reporters: ["default", "jest-junit"],
  setupFilesAfterEnv: ["expect-playwright"],
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium"],
    },
  },
};
