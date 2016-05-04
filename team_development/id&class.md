关于HTML元素分配ID和class类名，尽量保持命名语义化。

如多页面都碰到嵌套多层的html结构，直接用.wrap、.inner、.out表示外、内之分，会有些混乱，可以给他们分配类名为`.orderWrap`、`.orderInner`或`.addressWrap`、`.addressInner`，根据页面类型来分；

另外，针对表单通知消息显示的颜色，尽量避免直接用.red、.white，而是根据消息类型（默认、警示、强调）用`.default-txt`、`.warnning-txt`、.`notification-txt`来命名，因为如果需要修改警示颜色为橙色，就直接修改样式即可，而不是在.red里写橙色的rgb。

为了样式的`重用`、让代码`语义化`、`易读`，给HTML元素分配与语义相关的ID和类名是有意义的。

附：【转】通过分析github代码库总结出来的工程师代码书写习惯

<http://alloyteam.github.io/CodeGuide/>

<html>
<head>
	<title></title>
</head>
<body>
<div class="section toc">
    <div class="col">
        <h4><a href="http://alloyteam.github.io/CodeGuide/#naming">命名规则</a></h4>
        <ul>
            <li><a href="http://alloyteam.github.io/CodeGuide/#project-naming">项目命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#folder-naming">目录命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-naming">JS文件命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-naming">CSS, SCSS文件命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-naming">HTML文件命名</a></li>
        </ul>
    </div>
    <div class="col">
        <h4><a href="http://alloyteam.github.io/CodeGuide/#html">HTML</a></h4>
        <ul>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-syntax">语法</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-doctype">HTML5 doctype</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-lang">lang属性</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-encoding">字符编码</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-ie-compatibility-mode">IE兼容模式</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-style-script">引入CSS, JS</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-attribute-order">属性顺序</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-boolean-attributes">boolean属性</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-javascript">JS生成标签</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-reducing-markup">减少标签数量</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#html-practicality">实用高于完美</a></li>
        </ul>
    </div>
    <div class="col">
        <h4><a href="http://alloyteam.github.io/CodeGuide/#css">CSS, SCSS</a></h4>
        <ul>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-indentation">缩进</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-semicolon">分号</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-space">空格</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-blank-line">空行</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-new-line">换行</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-comments">注释</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-quote-marks">引号</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-naming-rule">命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-declaration-order">属性声明顺序</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-color">颜色</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-shorthand">属性简写</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-media-queries">媒体查询</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-scss">SCSS相关</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#css-miscellaneous">杂项</a></li>
        </ul>
    </div>
    <div class="col">
        <h4><a href="http://alloyteam.github.io/CodeGuide/#javascript">JavaScript</a></h4>
        <ul>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-indentation">缩进</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-line-max-length">单行长度</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-semicolon">分号</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-space">空格</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-blank-line">空行</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-new-line">换行</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-comments-single-line">单行注释</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-comments-multiline">多行注释</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-comments-documentation">文档注释</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-quote-marks">引号</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-variable-naming">变量命名</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-variable-declaration">变量声明</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-function">函数</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-array-object">数组、对象</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-brace">括号</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-null">null</a></li><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-null">
            </a><li><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-null"></a><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-undefined">undefined</a></li><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-undefined">
            </a><li><a href="http://alloyteam.github.io/CodeGuide/#js-literal-value-undefined"></a><a href="http://alloyteam.github.io/CodeGuide/#js-jshint">jshint</a></li><a href="http://alloyteam.github.io/CodeGuide/#js-jshint">
            </a><li><a href="http://alloyteam.github.io/CodeGuide/#js-jshint"></a><a href="http://alloyteam.github.io/CodeGuide/#js-miscellaneous">杂项</a></li>
        </ul>
    </div>
    <div class="col">
        <h4><a href="http://alloyteam.github.io/CodeGuide/#check">编辑器配置和构建检查</a></h4>
        <ul>
            <li><a href="http://alloyteam.github.io/CodeGuide/#check-sublime3">sublime3插件</a></li>
            <li><a href="http://alloyteam.github.io/CodeGuide/#check-grunt">grunt插件</a></li>
        </ul>
    </div>
</div>
</body>
</html>