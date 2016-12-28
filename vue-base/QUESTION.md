/**
 * 踩坑：
 * 1.Vue2.0有两种Build的方式：the standalone build and the runtime-only build（独立构建和运行时构建）.
  独立构建包括编译和支持template选项
  运行时构建不包括模板编译，并且不支持template选项，只能使用render选项。
  默认情况下，NPM包导出的是runtime-only build.因此为了要使用独立构建，在webpack配置中需要添加下面的代码
 resolve: {
        extensions: ['', '.js', '.css', '.scss','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'//
        }
    }

 *2.webpack-dev-server执行会报错
 * events.js:154
 throw er; // Unhandled 'error' event
 ^

 Error: getaddrinfo ENOTFOUND localhost
 at errnoException (dns.js:26:10)
 at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:77:26)
 *The most common reason for that error is that you have something else already using that port. Try starting it on another port.

 webpack-dev-server --port 3001
 
 *3.注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
 *4.npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build
 如"scripts": {
      "start": "webpack-dev-server --inline --hot",
      "w": "webpack"
    },
    必须这么执行：npm run w 才是真正执行webpack命令，npm start 或npm run start都是执行webpack-dev-server --inline --hot
    5.为了测试webpack-dev-server先uninstall掉 "devDependencies": {
                                           "vue-hot-reload-api": "^1.2.0",
    6.import "./style/main.css";此处要加./   否则报错找不到css
    7.wepack配置中entry可以接收string/array/object,如：
    string：
    {
    entry: "./public/src/index.js"
    }
    array: 
    {
    entry: ["./public/src/index.js",""]
    }
    object:
    {
    entry: {
    indexjs: "./public/src/index.js",
    mainjs: "./public/src/main.js"
    },
    output: {
    path: "./dist",
    filename: "bundle.js"//要多个文件参数就不是单单bundle.js，而是[name].js.去换成可以写成[name]-[hash:8]、chunkhash
    }
    }
    8.加hash/chunkhash去缓存
    一个改动，其他都会改动-hash
    一个改动，其他按实际情况是否被改动，若有则变化，若无则不变-chunkhash
    http://www.cnblogs.com/ihardcoder/p/5623411.html
    9.webpack配置解说，包括publicPath参数解释：http://www.jianshu.com/p/dcb28b582318
    10.html-webpack-plugin解说，用模板template生成html文件
    http://www.cnblogs.com/haogj/p/5160821.html
    11.webstrom编辑器里出现import引入模块资源会出现红色波浪线-所谓的错误提示，需要修改编辑器的setting-》Languages&Frameworks>JavaScript修改js语言版本为ECMAScript6
    12.webstrom出现es6的箭头函数等新语法出现波浪线以及怎么做到编辑器对vue的支持， http://www.lred.me/2016/01/07/webstorm%E6%B7%BB%E5%8A%A0-vue%E6%96%87%E4%BB%B6%E6%94%AF%E6%8C%81/
    13.2016年12月14日19:01:03
    基于webpack的前端工程化开发解决方案探索（二）：代码分：http://www.th7.cn/web/js/201512/138510.shtml
    构建工具：https://gold.xitu.io/entry/584fa75961ff4b0058efc095
    https://hongqinma.github.io/2016/12/02/t13-webpack%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7/
    http://www.jianshu.com/p/8adf4c2bfa51
    http://webpack.github.io/docs/webpack-dev-server.html
    14.npm install --save vue vue-router安装vue及其路由的依赖文件，区别于--save-dev这是开发环境
 * */