const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendorStylesExtract = new ExtractTextPlugin('vendor.min.css');

const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';
console.log('Webpack ENV: ', ENV);

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',
	watch: true,

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
		]
	},

	plugins: [
		new DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		vendorStylesExtract,
		new LiveReloadPlugin()
	]
});
