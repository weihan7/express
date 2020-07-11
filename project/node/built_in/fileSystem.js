//同步读取
var fs = require('fs');
var data;
try {
	data = fs.readFileSync('./source/fileForRead.txt', 'utf8');
	console.log('文件内容:'  + data);
} catch (e) {
	console.log('读取文件错误:'  + e.message);
}


//异步读取
fs.readFile('./source/fileForRead.txt', 'utf8', function(err, data){
	if(err){
		return console.error('读取文件错误：'+ err.message);
	}
	console.log('异步文件内容：'+ data);
});



// 通过文件流读取
// 适合读取大文件
var readStream = fs.createReadStream('./source/fileForRead.txt', 'utf8');
readStream
	.on('data', function(chunk){
		console.log('读取数据：'+chunk)
	})
	.on('error', function(err){
		console.log('出错'+err.message);
	})
	.on('end', function(){
		console.log('没有数据了');
	})
	.on('end', function(){
		console.log('已经关闭');
	})



//异步写入
//如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容；
fs.writeFile('./source/fileForRead.txt', 'hello writeFile', 'utf8', function(err){
	if(err) throw err;
	console.log('writeFile: 文件写入成功');
})


//同步写入
try {
	fs.writeFileSync('./source/fileForRead.txt', 'hello writeFileSync','utf8');
	console.log('writeFileSync: 文件写入成功');
} catch (error) {
	throw error;
}


//追加文件内容
fs.appendFile('./source/fileForRead.txt', 'hello, this is a new content', 'utf8', function(err){
    if(err) throw err;
    console.log('append成功');
});


//通过文件流写入
var writeStream = fs.createWriteStream('./source/fileForWrite1.txt','utf8');
writeStream
	.on('close', function(){
		console.log('writeStream: 已经关闭');
	});

writeStream.write('hello');
writeStream.write('writeStream');
writeStream.end('');



//文件是否存在
fs.access('./source/fileForRead.txt', function(err){
	if(err) throw err;
	console.log('fileForRead.txt已经存在');
})


//创建目录 异步
fs.mkdir('./source/hello', function(err){
	if(err) throw err;
	console.log('目录创建成功');
})


//创建目录 同步
fs.mkdirSync('./source/hello2');


//删除目录	异步
fs.rmdir('./source//hello', function(err){
	if(err) throw err;
	console.log('目录删除成功');
});

//删除目录 	同步
fs.rmdirSync('./source/hello2');



// //删除文件
// fs.unlink('./source/fileForRead.txt' ,function(err){
// 	if(err) throw err;
// 	console.log('文件删除成功');
// })

// fs.unlinkSync('./source/fileForWrite1.txt');



