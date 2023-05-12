module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(moduleName)/)'],
  testEnvironmentOptions: {
    esModuleInterop: true,
  },
};
