var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'polyfills': helpers.fromRoot('client/polyfills.main.ts'),
		'vendor': helpers.fromRoot('client/vendors.main.ts'),
		'app': helpers.fromRoot('client/bootstrap.main.ts')
	},

	resolve: {
		extensions: ['', '.js', '.ts'],
		root: helpers.fromRoot('client'),
		modulesDirectories: ['node_modules']
	},

	output: {
		path: helpers.fromRoot('dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
		sourceMapFilename: '[name].bundle.map'
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts', 'angular2-template-loader']
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
				loader: ExtractTextPlugin.extract([
					'css?minimize',
					'postcss',
					'resolve-url',
					'sass?sourceMap'
				])
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
		new ExtractTextPlugin('styles.min.css'),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: helpers.fromRoot('client/index.html'),
			favicon: helpers.fromRoot('client/images/favicon.png'),
			// chunksSortMode: function (a, b) {
			// 	if (a.names[0] === 'common') {
			// 		if (b.names[0] === 'polyfills' || b.names[0] === 'vendor' || b.names[0] === 'app') return -1;
			// 	}
			// 	if (a.names[0] === 'polyfills') {
			// 		if (b.names[0] === 'common') return 1;
			// 		if (b.names[0] === 'vendor' || b.names[0] === 'app') return -1;
			// 	}
			// 	if (a.names[0] === 'vendor') {
			// 		if (b.names[0] === 'common' || b.names[0] === 'polyfills') return 1;
			// 		if (b.names[0] === 'app') return -1;
			// 	}
			// 	if (a.names[0] === 'app') {
			// 		if (b.names[0] === 'polyfills' || b.names[0] === 'vendor' || b.names[0] === 'common') return 1;
			// 	}
			// }
		})
	]
};
