
var fs=require('fs');
const request=require('request')

request('https://www.google.com/',function(err,response,body){

// console.log(body);
fs.writeFile('read.html',body,function(err){})


})