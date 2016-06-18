const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'polyfills': './client/utils/polyfills.main.ts',
		'vendor': './client/utils/vendors.main.ts',
		'app': './client/bootstrap.main.ts'
	},

	resolve: {
		extensions: ['', '.js', '.ts'],
		root: helpers.root('src'),
		modulesDirectories: ['node_modules']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(png|jpe?g|gif|mp4|svg|woff|woff2|vtt|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					'style',
					'css?minimize',
					'postcss',
					'resolve-url',
					'sass?sourceMap'
				]
			}
		]
	},

	sassLoader: {
		outputStyle: 'compressed'
	},
	postcss: function () {
		return [precss, autoprefixer];
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: [
				'app',
				'vendor',
				'polyfills'
			]
		}),

		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: 'head',
			favicon: './client/images/favicon.png'
		})
	]
};
