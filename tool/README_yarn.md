## yarn - 包管理器

### 一、介绍

<div align="center"><img height=230 src="https://yarnpkg.com/assets/feature-speed.png"></div>

#### yarn是一个更快、更可靠、更安全的，在开发上可作为npm替代品的包管理器。

>	Yarn is a new JavaScript package manager built by Facebook, Google, Exponent and Tilde. As can be read in the official announcement, its purpose is to solve a handful of problems that these teams faced with npm, namely:  
1.installing packages wasn’t fast/consistent enough  
2.there were security concerns, as npm allows packages to run code on installation.

**1.离线模式**

`yarn add <package@version> --offline` 

yarn会将安装过的包在全局进行缓存，可以先通过`yarn add <package...> --offline` 查看  **possible versions** 然后进一步在无网络状态下安装具体版本的包。
	
**2.确定性(一致性)、扁平模式**

安装依赖过程中，yarn.lock文件会用简明的有序键来锁定已安装的文件到指定版本，保证以后在其他机子上安装每一个包的时候，能够在node_modules里都有着完全相同的文件结构。

	注：解析不匹配的依赖版本为一个单一的版本来避导致免多个版本(比如说项目依赖A,B,C，这三个库分别对xxlib库存在1.1.x,1.2.x,1.2.x版本的依赖，yarn不会‘傻傻的’去下载这三个版本)，每个模块被添加的同时，yarn就会创建/更新yarn.lock文件，保证其他机子也能够安装相同版本的包，以及包含了package.json中定义的一系列允许的版本。
	
**3.网络性能**

并行方式对包进行安装，避免请求瀑布，最大化利用网络。
	
**4.网络适应**
	
单个请求失败自动重新发起请求。

### 二、安装

方法1：安装对应系统版本的[.msi文件](https://yarnpkg.com/zh-Hans/docs/install#windows-tab)；  
方法2：从[Node.js官网](https://nodejs.org/en/)下载对应平台的安装程序，接着安装Node.js的包管理工具npm,最后在控制台运行指令：`npm install yarn -g` ；

如果遇到下载node、安装npm依赖文件比较慢，可以移步[淘宝NPM镜像](http://npm.taobao.org/)； 运行指令测试yarn是否安装：`yarn --version`；如果使用cnpm命令行工具代替默认的npm，即 `npm install -g cnpm --registry=https://registry.npm.taobao.org`，可以直接运行指令：`cnpm install yarn -g`。
	
### 三、使用

1.初始化包的开发环境，会跳过交互式会话(如name/description/git repository等)，根据默认值直接生成 **package.json** 文件。  
<code>yarn init -y</code>或`yarn init --yes` 

2.安装依赖

 `yarn` 或 `yarn install` 

如果直接执行不带命令的yarn指令，将会执行`yarn install`。  

    依赖关系解析：yarn在解析package.json文件过程中，产生yarn.lock文件，用于记录安装的所有软件包的 **具体版本号**,进而安装package.json列表中所有的依赖文件到当前路径下的node_modules文件夹。

 `yarn add <package...>` 安装到 **dependencies** 中。相当于`npm install <package...> --save`

 `yarn add <package...> [--dev/-D]` 安装到 **devDependencies** 中。相当于`npm install <package...> --save-dev`

 `yarn add [package-name]` 默认安装 **latest** 版本的包

 `yarn add [package-name@1.2.3]` 从 registry 注册表安装指定版本的包

 `yarn add [package-name@tag]` 安装特定 tag 的包，如(e.g. **beta** , **next**, or **latest**)

    dependencies 与 devDependencies 的差别：  
    dependencies 是运行代码需要的依赖，如es6-promise、axios、react、jQuery；  
    devDependencies 是在开发工作流的一些地方需要的依赖，但在运行时不需要，如Babel转码。下面是官方英文介绍(个人觉得英文读起来更容易理解)：
>  dependencies are your normal dependencies, or rather ones that you need when running your code (e.g. React or ImmutableJS).  
devDependencies are your development dependencies. Dependencies that you need at some point in the development workflow but not while running your code (e.g. Babel or Flow).

3.删除依赖

`yarn remove <package...>` 会移除对应依赖文件的包，同时更新package.json和yarn.lock文件。相当于`npm uninstall <package> --save`
#### 此项目的其他开发者更新到package.json和yarn.lock文件后，需要执行`yarn` 或 `yarn install`来同步node_modules目录为新的依赖集。

4.更新依赖、查看版本号

`yarn outdated` 可查看当前package.json文件中依赖的包的当前版本、语意化的版本号 (semantic versioning, [semver](http://semver.org/))，以及最新有效的版本，关于 **^**/ **~**/ **1.x**等版本具体意义[点此处查看](https://github.com/npm/node-semver) 。相当于`npm outdated`

`yarn outdated <package...>` 查看当前package.json文件中当前命令行中的包所依赖的版本

`yarn upgrade <package...>` 会把单个包更新到 **latest** 标签指定的版本，并更新yarn.lock和package.json中该package包的版本号字段。相当于`npm update <package...>`

`yarn upgrade <package@version>` 会把单个包更新到指定版本。

`yarn upgrade <package@tag>` 会把单个包更新到指定版本。

	$ yarn outdated
	Package  Current  Wanted  Latest  Location
	lodash    4.15.0  4.15.0  4.17.4
	vue        2.0.8   2.0.8   2.2.4
	$ yarn outdated lodash
	yarn outdated v0.18.1
	warning No license field
	Package Current Wanted Latest Package Type
	lodash  4.15.0  4.15.0 4.17.4 dependencies
	Done in 0.76s.

	$ yarn upgrade lodash
	yarn upgrade v0.18.1
	warning No license field
	[1/4] Resolving packages...
	[2/4] Fetching packages...
	[3/4] Linking dependencies...
	warning Unmet peer dependency "file-loader@*".
	[4/4] Building fresh packages...
	success Saved lockfile.
	success Saved 1 new dependency.
	└─ lodash@4.17.4
	warning No license field
	Done in 1.99s.

5.缓存处理

  `yarn cache ls` 在控制台打印出当前用户所持有的全局缓存

  `yarn cache dir` 在控制台打印出当前用户所持有的全局缓存所在的文件路径

  `yarn cache clean` 清除当前用户所持有的全局缓存

  `yarn config set cache-folder <path>` 指定当前用户所持有的全局缓存文件

  `yarn <commmand> --cache-folder <path>` 给特定包的缓存指向自定义的全局缓存文件

6.配置项设置

`yarn config set <key> <value> [-g|--global]` 

`yarn config get <key>`

`yarn config delete <key>`

`yarn config list` 

`yarn config set registry “https://registry.npm.taobao.org”` 为了快速安装包，一般会将yarn默认的安装源指向淘宝镜像源 `https://registry.npm.taobao.org`。相当于npm安装采用淘宝仓库所进行的配置`npm config set registry https://registry.npm.taobao.org 
`。

相当于对yarn配置的object进行 **set** 赋值、 **get** 取值、 **delete** 删除、 **list** 查看。yarn config list内容如下：

	$ yarn config list
	yarn config v0.18.1
	info yarn config
	{ 
		registry: 'https://registry.npm.taobao.org',
  		'https://registry.yarnpkg.com': true,
  		register: true,
  		who: 'honghuai',
  		'version-tag-prefix': 'v',
	  	'version-git-tag': true,
  		'version-git-sign': false,
  		'version-git-message': 'v%s',
  		'init-version': '1.0.0',
  		'init-license': 'MIT',
  		'save-prefix': '^',
  		'ignore-scripts': false,
  		'ignore-optional': false,
  		'strict-ssl': true,
  		'user-agent': 'yarn/0.18.1 npm/? node/v6.2.0 win32 x64' 
	}
	info npm config
	{ email: '1398988892@qq.com' }
	Done in 0.06s.

7.`yarn generate-lock-entry` 生成一份基于package.json的yarn.lock文件(如果package.json文件中缺失name/version/license信息会有对应提示你完善后再执行此命令)。

	$ yarn generate-lock-entry
	# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
	# yarn lockfile v1
	crm@0.1.0:
  		version "0.1.0"
  		dependencies:
    		lodash "4.15.0"
    		vue "2.0"

---

参考资料：

* [npm](https://docs.npmjs.com/cli/install)
* [yarn](https://yarnpkg.com/zh-Hans/docs/cli/)
* [Yarn: A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
* [yarn vs npm](https://www.sitepoint.com/yarn-vs-npm/)
