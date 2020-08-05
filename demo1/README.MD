### 按照webpack官网上的内容对webpack内容全面的再整理下
### [中文文档-基础内容](https://www.webpackjs.com/guides/getting-started/)
### [中文文档-配置](https://www.webpackjs.com/configuration//)
### 一、贴出官网地址镇楼[webpackjs](https://www.webpackjs.com/)
### 二、整体目录结构如下
```
  webpack-demo
  |- /node_modules
  |- webpack.config.js
  |- /dist        // 发布文件夹
    |- bundle.js
    |- index.html
  |- /resources   // 资源文件夹
    |- banner1.jpg
    |- banner2.jpg
    |- icon.png
  |- /src         // 源文件
    |- MOCK       // MOCK数据
      |- data.xml
      |- user.json
    |- style.css
    |- index.js
  |- package.json
```
### 三、知识点
|- 1、添加webpack.config.js 文件，更改entry(入口)\output(输出)\resolve(解析)\module(模块)<br/>
|- 2、在package.json中配置webpack执行命令 `webpack --config webpack.config.js`<br/>
|- 3、独立执行脚本`npm start`<br/>
|- 4、各种module(模块)<br/>
|  模块名   | 作用  | 匹配正则 |  
|  ----  | ----  | ----  |
| style-loader  | 样式加载 | /\\.css/ |
| css-loader  | 样式加载 | /\\.css/ |
| url-loader  | 文件加载 | /\\.(png\|jpg\|gif)$/ |
| file-loader  | 文件加载 |  /\\.(png\|jpg\|gif)$/  |
| xml-loader  | XML文件解析 | /\\.xml$/ |
| ......  | ...... | ...... |
|- 5、<br/>
### 三、package.json
```
{
  "name": "test-web",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack --config webpack.config.js",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^4.1.1",
    "file-loader": "^6.0.0",
    "lodash": "^4.17.19",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "xml-loader": "^1.2.1"
  }
}

```
### 四、webpack常用配置（webpack.config.js）
```
// webpack.config.js
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
```
