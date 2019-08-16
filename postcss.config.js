const whenProd = processor => process.env.NODE_ENV === 'production' && processor;

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './docs/index.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || [],
});

const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    whenProd(purgecss),
    whenProd(cssnano),
  ],
}
