
if (process.env.NODE_ENV === 'production') {
	module.exports = require("./dist/hello-world-webpack.min.js");
} else {
	module.exports = require("./dist/hello-world-webpack.js");
}
