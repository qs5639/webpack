const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 开发者模式
    mode: 'development',
    // 使用map隐射模式
    devtool: 'inline-source-map',
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
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"//输出为根目录
    },
    // dev时的服务。http://localhost:3001/index.html
    devServer: {
        contentBase: "./index",
        port: "3001"
    },
    // 解析
    resolve: {
        // 文件夹在全局项目中的别名
        alias: {
            MOCKities: path.resolve(__dirname, "src/MOCK/")
        }
    }
}