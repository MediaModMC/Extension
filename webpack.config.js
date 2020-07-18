const path = require('path');

module.exports = {
  entry: {
    'app': './src/app/app.js',
    "soundcloud": './src/sites/soundcloud.js',
    "applemusic": './src/sites/applemusic.js',
    "youtubemusic": './src/sites/youtubemusic.js',
    "youtube": './src/sites/youtube.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
