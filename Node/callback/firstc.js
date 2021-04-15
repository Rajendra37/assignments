// this the synchronous way

var fs=require('fs');
var data=fs.readFileSync('my.txt')
console.log(data.toString());
console.log('file readed..');
   

