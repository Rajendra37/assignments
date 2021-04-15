var fs=require('fs');


// reading data by using createreadStream.
var mystream=fs.createReadStream('my.txt');

// writing data by using createwritestream
// var mywriteStream=fs.createWriteStream('write.txt');


// data event is occure when the data is availabe
mystream.on('data',function(chunk){

    console.log("New chunck recived..");
    // mywriteStream.write(chunk);
    console.log(chunk);
})

// end event is occurs when the reading is over
mystream.on('end',function(){

    console.log("reading is done....");
 
})


// error event is occurs when their is file not availabe
mystream.on('error',function(chunk){

    console.log("this file is not availabe....");
;
})