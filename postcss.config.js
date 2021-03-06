module.exports = {
  ident: 'postcss',
  plugins: {
    /* More info at https://github.com/unlight/postcss-import-url */
    'postcss-import-url': {
      modernBrowser: true,
    },
    /* More info at https://github.com/TrySound/postcss-easy-import */
    'postcss-easy-import': {
      extensions: '.css',
    },
    /* More info https://github.com/csstools/postcss-normalize */
    'postcss-normalize': {},
    /* More info at https://github.com/csstools/postcss-preset-env */
    'postcss-preset-env': {
      stage: 0,
      features: {
        'logical-properties-and-values': false,
      },
    },
    /* More info at https://github.com/seaneking/postcss-responsive-type */
    'postcss-inset': {},
    /* More info at https://cssnano.co/ */
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
        },
      ],
    },
  },
};
