var moment = require('moment');
var model = require('../model');

//获取文章列表
function index(req, res) {
  var page = (req.query.page > 0) ? req.query.page : 1 //当前页
  var data = {
    total: 0, //总共页数
    curPage: page,
    list: [] //当前页的文章列表
  }
  var pageSize = 2;
  model.connect(function (db) {
    db.collection('articles').count(function (err, result) {
      data.total = Math.ceil(result / pageSize);
    });
    db.collection('articles').find().skip((page - 1) * pageSize).limit(pageSize).sort({
      id: -1
    }).toArray(function (err, docs) {
      if (err) {
        console.log('文章查询错误');
        throw err;
      }
      if (docs.length == 0) {
        res.redirect('/?page=' + ((page - 1) || 1));
      }
      docs.map(function (item, index) {
        item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss');
      })
      data.list = docs;
      res.render('index', {
        username: req.session.username,
        data: data
      });
    })
  })
}

function register(req, res) {
  res.render('register', {});
}


function login(req, res) {
  res.render('login', {});
}


function write(req, res) {
  let id = parseInt(req.query.id);
  let page = parseInt(req.query.page);
  var item = {
    title: '',
    content: '',
  }
  if (id) {
    model.connect(function (db) {
      db.collection('articles').findOne({
        id: id
      }, function (err, docs) {
        if (err) {
          console.log('编辑-查询失败')
        } else {
          item = docs;
          item['page'] = page;
          res.render('write', {
            username: req.session.username,
            item: item
          });
        }
      })
    })
  } else {
    res.render('write', {
      username: req.session.username,
      item: item
    });
  }
}


function detail(req, res) {
  let id = parseInt(req.query.id);
  let username =  req.session.username || '';
  model.connect(function (db) {
    db.collection('articles').findOne({
      id: id
    }, function (err, docs) {
      if (err) {
        console.log('查询失败', err);
      } else {
        let item = docs;
        item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss');
        res.render('detail', {
          item: item,
          username: username
        });
      }
    })
  })
}

module.exports = {
  index,
  register,
  login,
  write,
  detail
}