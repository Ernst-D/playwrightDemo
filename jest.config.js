module.exports = {
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ["./jest.setup.js"],
    preset: "jest-playwright-preset",
    transformIgnorePatterns: [
      "node_modules/(?!@tpoisseau)"
    ],
  };