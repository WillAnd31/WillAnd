const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const appStylesExtract = new ExtractTextPlugin('styles.min.css');

module.exports = {
	context: helpers.fromRoot(''),
	target: 'web',
	stats: {
		assets: false,
		chunks: true,
		modules: true,
		timings: true,
		warnings: false,
		errors: true,
		errorDetails: true
	},

	entry: {
		polyfills: helpers.fromRoot('client/polyfills.main.ts'),
		vendor: helpers.fromRoot('client/vendors.main.ts'),
		app: helpers.fromRoot('client/bootstrap.main.ts'),
		styles: helpers.fromRoot('client/styles/global.scss')
	},

	resolve: {
		extensions: ['.js', '.ts'],
		mainFiles: ['index'],
		modules: [
			helpers.fromRoot('client'),
			'node_modules'
		]
	},

	output: {
		path: helpers.fromRoot('dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
		sourceMapFilename: '[file].map'
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(png|jpe?g|gif|mp4|svg|woff|woff2|vtt|ttf|eot|ico)$/,
				loader: 'file-loader',
				query: { name: '/assets/[name].[ext]' }
			},
			{
				test: /\.scss$/,
				include: /app/,
				exclude: /node_modules|styles/,
				loaders: [
					'exports-loader?module.exports.toString()',
					'css-loader?minimize&sourceMap',
					'postcss-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				]
			},
			{
				test: /\.scss$/,
				include: /styles/,
				exclude: /node_modules|app/,
				loader: appStylesExtract.extract([
					'css-loader?minimize&sourceMap',
					'postcss-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				])
			}
		]
	},

	plugins: [
		appStylesExtract,
		new webpack.ProgressPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				context: helpers.fromRoot(''),
				postcss: [precss(), autoprefixer()],
				output: {
						path: helpers.fromRoot('dist')
				},
				sassLoader: {
					includePaths: [
						helpers.fromRoot('node_modules'),
						helpers.fromRoot('client'),
					]
				},
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
				}
			}
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2,
			chunks: ['vendor', 'polyfills', 'app']
		}),

		new HtmlWebpackPlugin({
			template: helpers.fromRoot('client/index.html'),
			inject: 'body',
			hash: true,
			favicon: helpers.fromRoot('client/images/WillAndFavicon.svg'),
			chunksSortMode: function(a, b) {
				var order = ['common', 'polyfills', 'vendor', 'app', 'styles'];
				return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
			}
		}),

		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			helpers.fromRoot('client')
		)
	]
};
