module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env':
      process.env.NODE_ENV === 'production'
        ? {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          }
        : {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
