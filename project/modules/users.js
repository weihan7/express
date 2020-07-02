
var model = require('../model/index');

function register(req, res){
    var data={
        username: req.body.username,
        password: req.body.password, 
        password2: req.body.password2, 
      }
      model.connect(function(db){
        db.collection('users').insertOne(data, function(err, ret){
          if(err){
            console.log('注册失败');
            res.redirect('/register');
          }else{
            res.redirect('/login');
          }
        })
      })
}

function login(req, res){
    var data={
      username: req.body.username,
      password: req.body.password
    }
    model.connect(function(db){
      db.collection('users').find(data).toArray(function(err, result){
        if(err){
          res.redirect('/login');
        }else{
          if(result.length> 0){
            req.session.username = data.username;
            res.redirect('/');
          }else{
            res.redirect('/login');
          }
        }
      })
    })
}

function logout(req, res){
    req.session['username']= undefined;
    res.redirect('/login');
}


module.exports = {
    register,
    login,
    logout
}