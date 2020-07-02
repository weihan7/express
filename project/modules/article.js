
var model = require('../model');
var multiparty = require('multiparty');
var fs = require('fs');

function releaseArticle(req, res) {
    let id = parseInt(req.body.id);
    if(id){
        var page = req.body.page;
        var title= req.body.title;
        var content = req.body.content;
        model.connect(function(db){
            db.collection('articles').updateOne({id: id},{$set:{
                title: title,
                content: content
            }}, function(err, ret){
              if(err){
                  console.log('修改失败', err);
              } else{
                  console.log('修改成功');
                  res.redirect('/?page='+ page);
              }
            })
        })
    }else{
        var data = {
            title: req.body.title,
            content: req.body.content,
            id: Date.now(),
            username: req.session.username
        }

        model.connect(function(db){
            db.collection('articles').insertOne(data, function(err, ret){
                if(err){
                    console.log('文件发布失败', err);
                    res.redirect('/write');
                }else{
                    res.redirect('/');
                }
            })
        })
    }
    
}

function jumpPage(req, res){

}

function delArticle(req, res){
    var id = parseInt(req.query.id);
    var page = req.query.page;
    model.connect(function(db){
        db.collection('articles').deleteOne({id: id}, function(err, ret){
            if(err){
                console.log('删除失败');
            } else{
                console.log('删除成功');
            }
            res.redirect('/?page='+page);
        });
    })
}

function upload(req, res){
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files){
        if(err){
            console.log('上传失败', err);
        } else{
            console.log('文件列表', files);
            var file = files.filedata[0];
            var rs = fs.createReadStream(file.path);
            var newPath = '/uploads' + file.originalFilename;
            var ws = fs.createWriteStream('./public'+ newPath);
            rs.pipe(ws);
            ws.on('close', function(){
                console.log('文件上传成功');
                res.send({err: '', msg: newPath});
            });
        }
    });
}

module.exports = {
    releaseArticle,
    jumpPage,
    delArticle,
    upload
}