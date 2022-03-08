const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "worker.js",
  },
  watchOptions: {
    ignored: /node_modules|dist|\.js/g,
  },
  target: "webworker",
  mode: process.env.NODE_ENV || "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
}

module.exports = config
