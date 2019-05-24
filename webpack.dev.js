const path = require('path'),
  process = require('process'),
  isPROD = process.env.NODE_ENV === 'production',
  HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  HOOKS: path.resolve(__dirname, 'example-app'),
  TMP: path.resolve(__dirname, '.tmp'),
  BABEL_CACHE: path.resolve(__dirname, '.tmp/.cache')
};

exports.default = {
  mode: isPROD,
  entry: {
    'hooks': path.join(PATH.HOOKS, 'index.jsx')
  },
  output: {
    path: PATH.TMP,
    filename: './[name].bundle.js'
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: [
      PATH.TMP,
    ],
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PATH.HOOKS, 'index.html'),
      // chunks: ['hooks', 'vendors', 'runtime']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: PATH.BABEL_CACHE,
              presets: [
                '@babel/preset-react'
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties", {"loose": true}]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
