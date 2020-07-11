var dns = require('dns');
dns.lookup('www.baidu.com', function(err, address, family){
    if(err) throw err;
    console.log(typeof family);
    console.log(`地址：${address}, family: ${family}`);
});


//同一个域名，可能对应多个不同的ip。获取一个域名对应的多个ip
let options = {all: true};
dns.lookup('www.baidu.com', options, function(err, address, family){
    if(err) throw err;
    console.log(`地址：${JSON.stringify(address)}`);
});