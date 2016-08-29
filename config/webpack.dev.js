const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	plugins: [
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new LiveReloadPlugin({
			appendScriptTag: true
		})
	]
});
