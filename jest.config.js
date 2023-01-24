module.exports = {
  rootDir: '.',
  projects: [
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'header',
      setupFiles: ['<rootDir>/packages/header/dist/assets/index.js' ],
      testMatch: ['<rootDir>/packages/header/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'button',
      setupFiles: ['<rootDir>/packages/button/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/button/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
  ],
};