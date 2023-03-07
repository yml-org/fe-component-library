export default {
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
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'avatar',
      setupFiles: ['<rootDir>/packages/avatar/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/avatar/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'list',
      setupFiles: ['<rootDir>/packages/list/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/list/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'card',
      setupFiles: ['<rootDir>/packages/card/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/card/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'text-area',
      setupFiles: ['<rootDir>/packages/text-area/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/text-area/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'scroll-component',
      setupFiles: ['<rootDir>/packages/scroll-component/dist/assets/index.js'],
      testMatch: [
        '<rootDir>/packages/scroll-component/src/**/*.(test|spec).ts',
      ],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
      transform: {
        '\\.js$': ['babel-jest', { configFile: './babel-jest.config.js' }],
      },
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'text-field',
      setupFiles: ['<rootDir>/packages/text-field/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/text-field/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'chip',
      setupFiles: ['<rootDir>/packages/chip/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/chip/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
    {
      preset: 'ts-jest',
      runner: 'jest-electron/runner',
      testEnvironment: 'jest-electron/environment',
      displayName: 'progress-bar',
      setupFiles: ['<rootDir>/packages/progress-bar/dist/assets/index.js'],
      testMatch: ['<rootDir>/packages/progress-bar/src/**/*.(test|spec).ts'],
      collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**'],
    },
  ],
};
