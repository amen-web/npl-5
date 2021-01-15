const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MinCssExteact = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:'/\.scss$/',
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MinCssExteact({filename: '[name].css'})
    ]
}
