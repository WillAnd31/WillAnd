const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

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
				loader: '@ngtools/webpack'
			},
			{
				test: /(\.min)?\.css$/,
				include: /node_modules/,
				loaders: [
					'exports-loader?module.exports.toString()',
					'css-loader?minimize&sourceMap',
				]
			}
		]
	},

	plugins: [
		// new webpack.NoErrorsPlugin(),
		// new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'ENV': JSON.stringify(ENV)
		}),
		new AotPlugin({
			tsConfigPath: helpers.fromRoot('tsconfig.json'),
			entryModule: helpers.fromRoot('client/app/app.module#WillAndModule')
		})
	]

});
