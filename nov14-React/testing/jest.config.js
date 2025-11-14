export default {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
  
    // FIXED
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
  
    testMatch: ["<rootDir>/tests/**/*.test.js"],
  
    // HTML coverage
    coverageDirectory: "<rootDir>/coverage",
    coverageReporters: ["html", "text", "lcov"]
  };
  