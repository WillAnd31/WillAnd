const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendorStylesExtract = new ExtractTextPlugin('vendor.min.css');

const ENV = process.env.NODE_ENV = process.env.ENV = 'prod';
console.log('Webpack ENV: ', ENV);

module.exports = webpackMerge(commonConfig, {
	devtool: 'hidden-source-map',

	output: {
		path: helpers.fromRoot('dist-tmp'),
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader',
					'angular2-template-loader'
				]
			},
			{
				test: /(\.min)?\.css$/,
				include: /node_modules/,
				loader: vendorStylesExtract.extract([
					'css-loader?minimize&sourceMap'
				])
			}
			// TODO: Fix the ngTools webpack plugin
			// {
			// 	test: /\.ts$/,
			// 	loader: '@ngtools/webpack'
			// },
			// {
			// 	test: /(\.min)?\.css$/,
			// 	include: /node_modules/,
			// 	loaders: [
			// 		'exports-loader?module.exports.toString()',
			// 		'css-loader?minimize&sourceMap',
			// 	]
			// }
		]
	},

	plugins: [
		// new webpack.NoErrorsPlugin(),
		// new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		// TODO: Fix the ngTools webpack plugin
		// new AotPlugin({
		// 	tsConfigPath: helpers.fromRoot('tsconfig.json'),
		// 	entryModule: helpers.fromRoot('client/app/app.module#WillAndModule')
		// })
	]

});
