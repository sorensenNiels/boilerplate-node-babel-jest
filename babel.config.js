/* eslint-disable func-names */
module.exports = function(api) {
  // api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 10
        }
      }
    ]
  ];
  const plugins = [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'lodash'
  ];

  if (api.env('production')) {
    plugins.push('transform-remove-console');
  }

  return {
    sourceMaps: true,
    retainLines: false,
    presets,
    plugins
  };
};
