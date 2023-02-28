module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  }
};
