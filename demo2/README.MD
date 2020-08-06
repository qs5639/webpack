### 按照webpack官网上的内容对webpack内容全面的再整理下
### [中文文档-基础内容](https://www.webpackjs.com/guides/getting-started/)
### [中文文档-配置](https://www.webpackjs.com/configuration//)
### 一、贴出官网地址镇楼[webpackjs](https://www.webpackjs.com/)
### 二、整体目录结构如下
```
  demo2
  |- /node_modules
  |- webpack.config.js
  |- /dist        // 发布文件夹
    |- bundle.js
    |- index.html
  |- /resources   // 资源文件夹
  |- /src         // 源文件
    |- index.js
    |- print.js
  |- package.json
```
### 三、output知识点
|- 1、修改`webpack.config.js` 文件，允许`dist/index.html`每次动态生成，并自动引入所有js文件<br/>
|- 2、调试代码隐射，`webpack.config.js`中添加`devtool:inline-source-map`。方便调试<br/>
|- 3、独立执行脚本`npm start`<br/>
|- 4、各种plugins(插件)<br/>
|  插件名   | 作用  |  
|  ----  | ----  |
| plugins\html-webpack-plugin  | 在dist文件夹下清理不需要的文件。避免过分冗余 |
| plugins\clean-webpack-plugin  | 输出index.html文件(会将所有打包后的bundle.js文件直接引入) |
| ......  | ...... | ...... |

### 四、dev-server知识点
|- 1、监听模式`webpack-watch`<br/>
|- 2、开发模式`webpack-dev-server`<br/>
|- 3、使用node独立运行中间件模式`webpack-dev-middleware`<br/>

|  npm install命令   | 注意项  |  package.json中<br/>script修改|
|  ----  | ----  | ---- |
|  --save-dev webpack-dev-server | 可以在8080接口下启动服务，在`webpack-config.js` <br/>{devServer：{port:"3001"}}中修改端口 | `start: webpack-dev-server` |
|  --save-dev express webpack-dev-middleware  | 使用node 执行 | `server: node server.js`|
| ......  | ...... | ...... |

### 五、package.json
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
### 六、webpack配置（webpack.config.js）
```
// webpack.config.js
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
```
