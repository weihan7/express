var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

//压缩
var inFile =fs.createReadStream('./source/fileForCompress.txt');
var out = fs.createWriteStream('./source/fileForCompress.txt.gz');
try {
	inFile.pipe(gzip).pipe(out);
} catch (error) {
	throw error;
}

//解压
var gunzip = zlib.createGunzip();
var rs = fs.createReadStream('./source/fileForCompress.txt.gz');
var ws = fs.createWriteStream('./source/fileForCompress2.txt');
try {
	rs.pipe(gunzip).pipe(ws);
} catch (error) {
	throw error;
}


