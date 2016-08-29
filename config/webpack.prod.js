const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'prod';

module.exports = webpackMerge(commonConfig, {
	debug: false,

	output: {
		path: helpers.fromRoot('dist-tmp')
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		})
	],

	htmlLoader: {
		minimize: true,
		removeAttributeQuotes: false,
		caseSensitive: true,
		customAttrSurround: [
			[/#/, /(?:)/],
			[/\*/, /(?:)/],
			[/\[?\(?/, /(?:)/]
		],
		customAttrAssign: [/\)?\]?=/]
	},

});
