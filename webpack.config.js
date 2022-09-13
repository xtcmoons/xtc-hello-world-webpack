
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: "none",
	entry: {
		"hello-world-webpack": "./src/index.js",
		"hello-world-webpack.min": "./src/index.js"
	},
	output: {
		filename: "[name].js",
		library: "@Xtc/hello-world-webpack",
		libraryTarget: "umd",
		libraryExport: "default"
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				include: /\.min\.js$/,
			})
		]
	}
}
