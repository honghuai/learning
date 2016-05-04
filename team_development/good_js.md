##javascript变量命名规则
###1、camel标记法
首字母是小写的，后面写的变量都是以大写字符开头，

如：var `userName` = "hong",newPwd = "123456";
###2、pascal标记法（目前前端团队开发暂时不建议该方法）
首字母是大写的，后面写的变量都是以大写字符开头，

如：var `UserName` = "hong",NewPwd = "123456";
###3、加前缀标记法
在pascal标记命名的变量前附加一个小写字符或序列，指明类型，

如：var `aUserName` = "hong",reNewPwd = "123456";

<table>
	<thead>
		<tr>
			<td>类型</td>
			<td>前缀</td>
			<td>示例</tr>
		</tr>
		
	</thead>
<tbody>
<tr>
			<td>数组</td>
			<td>a</td>
			<td>aValues</tr>
		</tr>
		<tr>
			<td>布尔型</td>
			<td>b</td>
			<td>bFound</tr>
		</tr>
		<tr>
			<td>浮点型（数字）</td>
			<td>f</td>
			<td>fValue</tr>
		</tr>

		<tr>
			<td>函数</td>
			<td>fn</td>
			<td>fnMethod</tr>
		</tr>
		<tr>
			<td>整型（数字）</td>
			<td>i</td>
			<td>iValue</tr>
		</tr>
		<tr>
			<td>对象</td>
			<td>o</td>
			<td>oType</tr>
		</tr>
		<tr>
			<td>正则表达式</td>
			<td>re</td>
			<td>rePattern</tr>
		</tr>
		<tr>
			<td>字符串</td>
			<td>s</td>
			<td>sValue</tr>
		</tr>
		<tr>
			<td>变型（可以是任何类型）</td>
			<td>v</td>
			<td>vValue</tr>
		</tr>
</tbody>
</table>