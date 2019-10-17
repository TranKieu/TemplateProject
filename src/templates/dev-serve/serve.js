const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev');

const server = express();

// compiler
const compiler = webpack(config);
// Sử dụng Middleware
server.use(webpackDevMiddleware(
    compiler,
    config.devServer
));
server.use(webpackHotMiddleware(compiler));

// set static Server = Nơi chứa fontend
server.use(express.static(config.output.path));

server.listen(config.devServer.port, () => {
    console.log('Dev-Server is running!');
});