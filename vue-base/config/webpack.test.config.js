/**
 * Created by dell on 2016/12/19.
 */
module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:1002',
        'webpack/hot/only-dev-server',
        './src/js/index.js'],//相对publicPath
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // 让webpack去验证文件是否是.js结尾将其转换
                loader: 'babel',// 通过babel转换
                exclude: /node_modules/  // 不用转换的node_modules文件夹
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}