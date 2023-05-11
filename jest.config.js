module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
    "^.+\\.jsx?$": "babel-jest",
    "node_modules/axios/index.js": "babel-jest",
  },
};