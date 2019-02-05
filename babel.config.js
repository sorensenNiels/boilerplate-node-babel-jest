/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true);

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
    // '@babel/plugin-proposal-decorators',
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  };
};
