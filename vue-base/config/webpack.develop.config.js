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
    entry: [
        'webpack-dev-server/client?http://localhost:1006/',
        "./src/js/index.js"
    ],
    output: {
        //publicPath: "/assets/",
        path: "./dist/js",//path.join(__dirname,"dist"),//"./dist/",
        filename: "bundle.js"
    },
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
    // webpack-dev-server相关配置
    devServer:{
        contentBase:'./dist',
        hot:true,
        inline:true
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            //title: "测试基本webpack",//此时设置title无效，大部分属性已遵从template内容
            filename: "views/test.html",
            template: "src/assets/tpl_index.html",
            favicon: "src/image/bd_logo1.png",
            inject: "body",//head
            hash: false,
            minify: {
                removeComments: true,
                minifyCSS: true,
                collapseWhitespace: false
            },
            _desc: "基于webpack的前端工程化开发解决方案探索"//自定义option注入到template标记处
        })*/
    ]
};
module.exports = config;