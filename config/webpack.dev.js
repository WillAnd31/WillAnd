const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	plugins: [
		new DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new LiveReloadPlugin({
			appendScriptTag: true
		})
	]
});
