const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, '../public/');
const jsBundleName = '[name].min.js';
const cssBundleName = '[name].min.css';

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    cache: true,

    resolve: {
        root: [path.resolve(__dirname, '../src')],
        extensions: ['', '.js'],
    },
    entry: {
        app: 'js/index',
        vendor: [
            'babel-polyfill',
        ],
    },
    output: {
        path: outputPath,
        filename: jsBundleName,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src/js'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss'),
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, '../src/css')],
    },
    postcss() {
        return [autoprefixer({
            browsers: ['last 3 versions']
        })];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', jsBundleName),
        new ExtractTextPlugin(cssBundleName)
    ]
};
