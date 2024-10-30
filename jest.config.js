export default {
    testEnvironment: 'node', // или 'jsdom', в зависимости от вашего проекта
    transform: {
        '^.+\\.js$': 'babel-jest', // если используете Babel
    },
};