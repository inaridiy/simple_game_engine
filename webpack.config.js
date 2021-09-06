const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'development',

  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },

  target: ['web', 'es5'],
};
module.exports = (env, argv) => {
  if (argv.mode !== 'production') {
    config.target = 'web';
  }
  if (argv.mode === 'production') {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
