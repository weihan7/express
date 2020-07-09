# Express和Koa的应用程序生成器
## Express  
```
#先安装应用程序生成器，然后再快速创建应用程序框架
npm install express-generator -g
express --view=pug myapp
cd myapp
```

```
express -e myapp-ejs
cd myapp-ejs
```

```
express -H myapp-hogan
```


```
<% xxx %>：里面写入的是js语法，
<%= xxx %>：里面是服务端发送给ejs模板转义后的变量，输出为原html
<%- xxx %>：里面也是服务端发送给ejs模板后的变量，不过他会把html输出来
<%# 注释标签，不执行、不输出内容
```

ejs标签各种含义
```
<% '脚本' 标签，用于流程控制，无输出。
<%_ 删除其前面的空格符
<%= 输出数据到模板（输出是转义 HTML 标签）
<%- 输出非转义的数据到模板
<%# 注释标签，不执行、不输出内容
<%% 输出字符串 '<%'
%> 一般结束标签
-%> 删除紧随其后的换行符
_%> 将结束标签后面的空格符删除
```


## project项目
以文章管理系统为例，实现了两大模块的功能开发，分别是登录注册模块和文章管理模块，可以充分帮助大家了解Node.js Web服务端的开发流程，学会Node.js服务的搭建，学习MongoDB数据库的增删改查操作，学会构建一个完整的Web系统。

> 1. 学会使用express-generator搭建Express项目
> 2. 学会使用 mongo shell 连接MongoDB服务并执行数据库的常用操作
> 3. 学会使用 mongodb 模块完成数据库的增删改查任务
> 4. 学会注册、登入登出、登录拦截、Session会话的实现逻辑
> 5. 学会使用富文本工具 xhEditor，实现文章的发布
> 6. 学会文件上传的原理以及如何实现图片上传
> 7. 学会分页查询的原理与实现
> 8. 学会文章修改、删除与详情的实现


## Koa
```
npm install koa-generator -g
koa koa-demo
cd koa-demo
npm install
npm start
```
