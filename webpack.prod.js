/* global __dirname */
exports.default = {
  mode: 'production',
  entry: {
    'redux2hooks': './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-export-default-from'],
          presets: [
            '@babel/preset-env',
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
