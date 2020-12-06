const path = require('path');

const htmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill','./app.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './'
    },
    plugins: [
        new htmlWebpackplugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: '/\js$/',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}