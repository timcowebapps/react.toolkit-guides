'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "development";
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'docs');

const config = {
	mode: NODE_ENV,
	entry: {
		"bundle": path.join(__dirname, "src", "index.tsx")
	},
	output: {
		pathinfo: true,
		path: BUILD_PATH,
		filename: "[name].js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"timcowebapps-react.utils": path.resolve(__dirname, "node_modules", "@timcowebapps", "react.utils"),
			"timcowebapps-react.toolkit": path.resolve(__dirname, "node_modules", "@timcowebapps", "react.toolkit")
		}
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.ts[x]?$/,
				use: "ts-loader"
			}, {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[hash:base64:5]",
							discardComments: { removeAll: true },
							minimize: true
						}
					}, {
						loader: "sass-loader",
						options: {
                            sourceMap: true
                        }
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({ filename: "[name].css" }),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './public/index.html',
			filename: './index.html'
		})
	],
	devServer: {
		publicPath: '/',
		contentBase: BUILD_PATH,
		historyApiFallback: true,
		open: true,
		port: 2283,
		host: '0.0.0.0',
		watchOptions: {
			poll: true,
			ignored: /node_modules/
		}
	}
}

if(NODE_ENV === 'production') {
	config.optimization.minimizer.push(new UglifyJsPlugin({
		sourceMap: true,
		cache: false,
		parallel: 4,
		extractComments: false
	}));
}

module.exports = config;
