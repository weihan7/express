var crypto = require('crypto');
var fs = require('fs');

/**
 * hash例子
 * 
 * hash.digest([encoding])：计算摘要。encoding可以是hex、latin1或者base64。
 * 如果声明了encoding，那么返回字符串。否则，返回Buffer实例。注意，调用hash.digest()后，hash对象就作废了，再次调用就会出错。
 * 
 * hash.update(data[, input_encoding])：input_encoding可以是utf8、ascii或者latin1。
 *如果data是字符串，且没有指定 input_encoding，则默认是utf8。注意，hash.update()方法可以调用多次。
 */
var content = fs.readFileSync('./source/crypto.txt',{encoding: 'utf8'});
var hash = crypto.createHash('sha256');
var output;
hash.update(content);

output=hash.digest('hex');
console.log(output);//93ce1659435907a6ab1318f632a42c4feb6765da4c9a342bafdf55c25463a4d9
// hash.update(content);//报错Error [ERR_CRYPTO_HASH_FINALIZED]:  Digest already called
// hash.digest('hex');//[ERR_CRYPTO_HASH_FINALIZED]:  Digest already called




var input = fs.createReadStream('./source/crypto.txt', {encoding:'utf8'});
var hash1= crypto.createHash('sha256');
hash1.setEncoding('hex');
input.pipe(hash1).pipe(process.stdout);
//93ce1659435907a6ab1318f632a42c4feb6765da4c9a342bafdf55c25463a4d9PS



/**
 * HMAC例子
 * HMAC的全称是Hash-based Message Authentication Code，也即在hash的加盐运算。
 */
var secret = 'secret';
var hmac = crypto.createHmac('sha256', secret);
var input1 = fs.readFileSync('./source/crypto.txt',{encoding:'utf8'});
hmac.update(input1);
console.log('###',hmac.digest('hex'));
//e04c4bbf96f1ce03487fa80db5e7ef27010c920125742dcbc042826d1336aa5f



/**
 * 加解密主要用到下面两组方法：
 *
 * 加密：
 * crypto.createCipher(algorithm, password)
 * crypto.createCipheriv(algorithm, key, iv)
 *
 * 解密：
 * crypto.createDecipher(algorithm, password)
 * crypto.createDecipheriv(algorithm, key, iv)
 */