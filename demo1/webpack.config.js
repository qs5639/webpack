const path = require('path')
module.exports = {
    // 入口文件
    entry: "./src/index.js",
    // 输出
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // 解析
    resolve: {
        alias: {//起别名
            MOCKities: path.resolve(__dirname, "src/MOCK/")
        }
    },
    // 模块
    module: {
        rules: [
            // CSS文件加载
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // url-loader  可以对图片进行压缩成base64
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192//小于8192字节的 直接压缩为base64
                        }
                    }
                ]
            },
            //file-loader 可以加载字体文件或其他文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            //XML文件解析，JSON 默认支持
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}