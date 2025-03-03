module.exports = {
  printWidth: 180,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  endOfLine: 'lf',

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};