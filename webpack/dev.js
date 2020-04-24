const { join } = require('path');
const merge = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const config = require('./common');

const rootDir = join(__dirname, '../');

const devConfig = {
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
  ],
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: join(rootDir, './static'),
    host: '0.0.0.0',
    port: 80,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    before: function(app) {
      app.get('/env.js', function(req, res) {
        res.set('Content-Type', 'application/javascript; charset=utf-8');
        res.send(
          `window.__TEACH_ME_CONFIG__ = ${JSON.stringify(require('../env'))};`,
        );
      });
    },
  },
};

module.exports = merge(config, devConfig);
