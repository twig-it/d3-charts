const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json")
      })
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist/app"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo App",
      template: "./src/index.html"
    })
  ],
  output: {
    path: path.join(__dirname, "dist/app"),
    filename: "[name].bundle.js",
    clean: true
  }
};
