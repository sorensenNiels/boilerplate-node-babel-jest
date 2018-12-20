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
    ],
    '@babel/preset-flow'
  ];
  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins
  };
};
