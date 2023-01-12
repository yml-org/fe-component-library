module.exports = {
  preset: 'ts-jest',
  runner: 'jest-electron/runner',
  rootDir: '.',
  testEnvironment: 'jest-electron/environment',
  projects: [
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'header',
      setupFiles: ['<rootDir>/packages/header/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/**/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
  ],
};
