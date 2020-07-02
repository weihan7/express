var express = require('express');
var router = express.Router();
var users = require('../modules/users');


//提交注册页信息
router.post('/register', users.register);

//登录接口
router.post('/login', users.login);

//退出登录
router.get('/logout', users.logout);

//写文章
// router.get('/write', users.write);


module.exports = router;
