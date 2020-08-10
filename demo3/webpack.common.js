const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    plugins: [
        // 插件一--在dist文件夹下清理不需要的文件。避免过分冗余
        new CleanWebpackPlugin(),
        // 输出index.html文件(会将所有打包后的bundle.js文件直接引入)
        new HtmlWebpackPlugin({
            title: 'Output management'
        })
    ],
    // 输出
    output: {
        // 文件格式 
        filename: "[name].bundle.js",
        // 指向输出文件夹为dist
        path: path.resolve(__dirname, "dist")
    }
}