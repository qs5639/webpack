const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')


const config = require('./webpack.config.js')
const compiler = webpack(config)
// 实例化express示例
const app = express();

debugger
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.listen(3001, () => {
    console.log('express server is running')
})