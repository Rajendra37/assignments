var fs=require('fs');

var mystream=fs.createReadStream('my.txt');
var mywriteStream=fs.createWriteStream('write.txt');

mystream.pipe(mywriteStream);