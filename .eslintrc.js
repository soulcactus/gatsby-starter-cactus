module.exports = {
    extends: ['google', 'prettier', 'prettier/@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
    },
};
