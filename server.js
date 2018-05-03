const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config/index')

const app = express();
const webpackConfig = require('./build/webpack.server.conf.js');
const compiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

// Serve the files on port 3000.
const PORT = config.dev.port
app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!\n');
});