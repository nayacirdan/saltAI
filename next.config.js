/* eslint-disable no-console */
const path = require('path')

module.exports = {
  // Update webpack config to support css modules camelCase style
  // based on answer: https://github.com/vercel/next.js/discussions/11267?sort=top#discussioncomment-2352225
  webpack: (config) => {
    // camel-case style names from css modules
    config.module.rules
        .find(({oneOf}) => !!oneOf)
        .oneOf.filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
        .reduce((acc, {use}) => acc.concat(use), [])
        .forEach(({options}) => {
          if (options.modules) {
            options.modules.exportLocalsConvention = 'camelCase'
          }
        })

    // Add loader for svg files in webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    })
    return config
  },
  // Add utils to all scss files automatically
  crossOrigin: 'anonymous',
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'styles/utils.scss'),
      path.join(__dirname, 'node_modules/foundation-sites/scss'),
    ],
    prependData: `
        @import 'src/styles/utils.scss';
      `,
  },
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ['html', 'body'],
      },
    ],
  ],
}
