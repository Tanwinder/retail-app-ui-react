
// Setting a NODE_ENV var is the typical way of setting a dev/prod mode.
// HtmlWebpackPlugin generates index.html from a template which we are going to create shortly
// MiniCssExtractPlugin extracts styles to a separate file which otherwise remain in index.html
// mode tells webpack if your build is for development or production. In production mode webpack minifies the bundle.
// entry is a module to execute first after your app is loaded on a client. That's a bootstrap that will launch your application.
// output sets the target dir to put compiled files to
// module.rules describes how to load (import) different files to a bundle
// test: /\.(ts|tsx)$/ item loads TS files with ts-loader
// test: /\.css$/ item loads CSS files
// devtool sets the config for source maps
// plugins contains all plugins with their settings

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      // },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
    }),
    // new MiniCssExtractPlugin(),
  ],
};
