module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: true,
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  /* plugins: [
    '@babel/plugin-proposal-class-properties'
  ], */
  /* test: /\.(js|ts)$/, */
};
