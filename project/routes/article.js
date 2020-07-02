var express = require('express');
var router = express.Router();

var article = require('../modules/article');
const modules = require('../modules');

router.post('/add', article.releaseArticle);

router.post('/page', article.jumpPage);

router.get('/delete', article.delArticle);

router.post('/upload', article.upload);

module.exports = router;