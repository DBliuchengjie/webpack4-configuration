const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// When the webpack configuration exports a function, an "environment" may be passed to it
// 这个参数env 对应 package.json 里 scripts 里 的 --env.NODE_ENV='development
module.exports = (env) => {
  console.log(env);
  
  return {
    mode: 'development',
    // entry: path.join(__dirname, 'app', 'index'),
    entry: {
      index: './src/index.js',
      another: './src/another.js',
      third: './src/third.js'
    },
    watch: true,
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: "[name].bundle.js",
      chunkFilename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: 'babel-loader'
      }]
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },
    // devtool: 'source-map',
    devServer: {
      contentBase: path.join('./dist/'),
      inline: true,
      host: 'localhost',
      port: 9002,
    },
    optimization: {
      splitChunks: {
        automaticNameDelimiter: "~",
        cacheGroups: {
          commons: {
            // name:"common",
            minChunks: 2,
            chunks: "initial",
            priority: 3,
            reuseExistingChunk: true
          },
          vendor: {
            // name:"vender",
            chunks: "initial",
            minChunks: 3,
            priority: 4,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template:"src/index.html",
      //   filename:"index.html"
      // })
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      // new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': env.NODE_ENV
      }),
      new webpack.HotModuleReplacementPlugin({
        // Options...
      })
    ]
  };

}
