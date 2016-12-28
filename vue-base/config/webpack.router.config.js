var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    resolve: {
        extensions: ['', '.js', '.css', '.scss','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    entry: {
        //vendor: ["jquery","analytice.js"],
       routerjs:"./src/js/router/router.main.js"
    },
    output: {
        publicPath: "../",
        path: "./dist/",//path.join(__dirname,"dist"),//"./dist/",
        //filename: "js/[name]-[chunkhash:4].js"
        filename: "js/[name].js"
    },
    //watch: true,//在命令行--watch了就可以不需要再在这里添加watch:true，命令行--watch与此处选其一即可
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //title: "测试基本webpack",//此时设置title无效，大部分属性已遵从template内容
            filename: "views/router.html",
            template: "src/assets/tpl_router.html",
            favicon: "src/image/bd_logo1.png",
            inject: "body",//head
            hash: false,
            minify: {
                removeComments: true,
                minifyCSS: true,
                collapseWhitespace: false
            },
            _desc: "基于webpack的前端工程化路由探索"//自定义option注入到template标记处
        })
    ]
};
module.exports = config;