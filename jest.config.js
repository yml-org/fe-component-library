module.exports = {
  rootDir: '.',
  projects: [
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'header',
      setupFiles: ['<rootDir>/packages/header/dist/assets/index.js'],
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
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'image',
      setupFiles: ['<rootDir>/packages/image/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/image/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'link',
      setupFiles: ['<rootDir>/packages/link/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/link/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'video',
      setupFiles: ['<rootDir>/packages/video/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/video/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'flick-to-transition',
      setupFiles: ['<rootDir>/packages/page-transition/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/page-transition/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
  ],
};
