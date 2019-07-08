// webpack是node写出来的  使用node语法
// wbpack.config.js / webpackfile.js是webpack-cli默认的配置文件名称
// defaultDescription: "webpack.config.js or webpackfile.js",

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve('dist'))
module.exports={
    devServer: { // 开发服务器配置
        port: 6000,
        progress: true,
        contentBase: './build',
        open: true,  // 自动打开浏览器
        compress: true, // gzip压缩
    },
    mode: 'development',//production development默认2种模式
    entry: './src/index.js',
    output:{
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build'), // path必须是一个绝对路径  __dirname 以当前目录产生一个目录
    }, 
    plugins: [ // 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify:  { //压缩index.html
                removeAttributeQuotes: true, // 删除""
                collapseInlineTagWhitespace: true, //变成一行
            },
            hash: true, // 生成hash
        })
    ]
}
