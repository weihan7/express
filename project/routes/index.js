var express = require('express');
var router = express.Router();
var index = require('../modules/index');


//获取文章列表
router.get('/', index.index);

//渲染注册页
router.get('/register', index.register);

//渲染登录页
router.get('/login', index.login);

//渲染写文章页面
router.get('/write', index.write);

//渲染详情页
router.get('/detail', index.detail);

module.exports = router;