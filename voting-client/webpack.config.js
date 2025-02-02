module.exports = {
    entry: [
      './src/index.js'
    ],
    devServer: {
        contentBase: './dist',  // Serve files from the 'dist' directory
        port: 3000  // Or another available port
      },
    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };