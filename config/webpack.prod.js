const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const PORT = process.env.PORT || '3000';

console.log('Compiling Production');

module.exports = webpackMerge(commonConfig, {
	debug: false,

	output: {
		path: helpers.root('dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/',
		chunkFilename: '[id].chunk.js',
		sourceMapFilename: '[name].bundle.map'
	},

	plugins: [
		new DedupePlugin(),
		new DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new UglifyJsPlugin({
			beautify: false,
			comments: false,
			mangle: false
		}),
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
