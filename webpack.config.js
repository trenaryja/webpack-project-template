const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	stats: "errors-only",
	entry: {
		app: ["./src/js/index.js"],
		globals: [
			"./node_modules/@fortawesome/fontawesome-free/js/all.min.js",
			"./node_modules/@fortawesome/fontawesome-free/css/all.min.css",
			"./node_modules/typeface-roboto/index.css",
			"./node_modules/jquery/dist/jquery.min.js",
		],
	},
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ttf|eot|woff2?|svg)$/,
				loader: "url-loader?name=[name].[contentHash].[ext]",
			},
		],
	},
};
