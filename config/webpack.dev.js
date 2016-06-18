const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

console.log('Compiling Development');

module.exports = webpackMerge(commonConfig, {
	devtool: 'source-map',

	output: {
		path: helpers.root('dist'),
		publicPath: 'http://localhost:3000/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
		sourceMapFilename: '[name].bundle.map'
	},

	plugins: [
		new DefinePlugin({
			'ENV': JSON.stringify(ENV)
		})
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal',
		port: 3000
	}
});
