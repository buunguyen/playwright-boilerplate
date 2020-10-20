let config = require("./jest.config");

config = {
  ...config,
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: false,
        slowMo: 200,
      },
    },
  },
  setupFilesAfterEnv: [...config.setupFilesAfterEnv, "./jest-debug.setup.js"],
};

module.exports = config;
