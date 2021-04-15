


var fs=require('fs');
fs.readFile('my.txt','utf8',function(err,data){
    if(err)
    return console.error(err);
    console.log(data.toString());
    console.log('after file reading..');
})


console.log('before file reading..');