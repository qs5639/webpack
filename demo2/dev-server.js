const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config')
const option = {
    contentBase: "./dist",
    hot: true,
    host: "localhost"
}

// 添加server服务的入口起点
webpackDevServer.addDevServerEntrypoints(config, option)
const compiler = webpack(config);

const server = new webpackDevServer(compiler, option);
server.listen(5000,'localhost',()=>{
    console.log('dev server listening on port 5000');
})