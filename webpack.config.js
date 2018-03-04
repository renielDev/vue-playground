const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
               loader: 'babel-loader',
               options: {
                   presets: ['es2015']
               }
            },
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@src': path.resolve('src'),
      '@components': path.resolve('src/components')
    }
  }
};
