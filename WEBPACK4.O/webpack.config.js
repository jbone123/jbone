// webpack是node写出来的  使用node语法
// wbpack.config.js / webpackfile.js是webpack-cli默认的配置文件名称
// defaultDescription: "webpack.config.js or webpackfile.js",

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve('dist'))
module.exports={
    devServer: { // 开发服务器配置
        port: 8888,
        progress: true,
        contentBase: './build',
        open: true,  // 自动打开浏览器
        compress: true, // gzip压缩
    },
    mode: 'production',//production development默认2种模式
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
                removeComments: true, //删除注释
                removeAttributeQuotes: true, // 删除""
                // collapseInlineTagWhitespace: true, //变成一行
                collapseWhitespace: true, // 删除空格
            },
            hash: true, // 生成hash
        })
    ],
    module: {  // 模块
        rules:[ //规则 1.css-loader 主要解析@import这种语法
            //2. style-loader 把css插入到head标签中
            // loader特点 希望单一
            // loader用法  只用一个loader 字符串 多个loader 数组[]
            // loader顺序  默认从右向左-从下往上 执行 {test: /\.css$/, use:["style-loader","css-loader"] },
            // loader写法  还可以写成对象的方式
            // {test: /\.css$/, use:["style-loader","css-loader"] },
            {test: /\.css$/, use:[{
                loader: "style-loader",
                // options: {} 
            },"css-loader"] },
            
        ]
    }
}
