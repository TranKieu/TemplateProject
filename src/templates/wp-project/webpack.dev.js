const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
/** placeholder
 * [name]
 * [id]
 * [hash]
 * [chunkhash]
 * [query]
 */

module.exports = {

  mode: 'development',

  devtool: 'source-map',

  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      './src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name]-bundle.js',
    publicPath: "./"
  },
  resolve: {
    extensions: ['.js']
  },
  /** cấu hình cho chạy Live-Serve 
   * + contentBase :
   * + overlay : Hiện lỗi lên màn hình
   * + colors: hiện mầu khi compiler
   * */
  devServer: {
    port: 8080,
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  // Khai báo các Loaders cần thiết
  module: {
    rules: [{
        test: /\.s?css$/,
        use: [{
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          { // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          } // luon chay tu duoi len tren
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|mp4|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/static/[name].[ext]',
            publicPath: './'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
	  hash: true
    })
  ]
}