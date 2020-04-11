const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/script.js",
  },
  devtool: "source-map",
  output: {
    path: process.cwd() + "dist",
    filename: "script.min.js",
  },
  mode: "production",
  plugins: [new TerserPlugin()],
};
