# Express 应用程序生成器
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