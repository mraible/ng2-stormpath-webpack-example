var webpack = require("webpack");

module.exports = {
  entry: {
    "app": "./src/main"
  },
  output: {
    path: "./src",
    filename: "./app.js"
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    port: 4200,
    proxy: {
      '/forgot': {
        target: 'http://localhost:3000',
        secure: false
      },
      '/login': {
        target: 'http://localhost:3000',
        secure: false
      },
      '/logout': {
        target: 'http://localhost:3000',
        secure: false
      },
      '/me': {
        target: 'http://localhost:3000',
        secure: false
      },
      '/register': {
        target: 'http://localhost:3000',
        secure: false
      },
      "/token/**": {
        "target": "https://localhost:3000",
        "secure": false,
        "changeOrigin": true
      }
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
      },
      /* Embed files. */
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      /* Async loading. */
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version)
    })
  ]
};
