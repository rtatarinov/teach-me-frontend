const merge = require('webpack-merge');
const config = require('./common');

const prodConfig = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: true,
  },
};

module.exports = merge(config, prodConfig);
