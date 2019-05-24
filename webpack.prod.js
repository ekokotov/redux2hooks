/* global __dirname */
exports.default = {
  mode: 'production',
  entry: {
    'redux2hooks': './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './index.js'
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [],
          presets: [
            ["@babel/preset-env", {
              "targets": {"browsers": ["last 2 chrome versions"]},
              "corejs": "2", // <---
              "useBuiltIns": "entry"
            }],
            '@babel/preset-react',
          ],
        },
      }],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
