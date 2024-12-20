module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: [
        '**/?(*.)+(test).[jt]s?(x)'
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transformIgnorePatterns: [
        '/node_modules/'
    ],
    moduleNameMapper: { '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'}
};