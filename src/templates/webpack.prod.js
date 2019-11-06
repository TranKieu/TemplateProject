const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: [
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name]-[hash]-bundle.js',
        publicPath: "./"
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
                test: /\.s?css$/,
                use: [{
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: MiniCssExtractPlugin.loader
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
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            { // xử lý ảnh
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|mp4|svg|ttf|woff|woff2)(\?.*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/static/[name].[hash:8].[ext]',
                        publicPath: './'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html', 
			hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}