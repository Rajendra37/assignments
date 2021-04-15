var fs=require('fs');



setTimeout(() => {

    fs.readFile('my.txt', 'utf8',function(err, data){
        console.log(data);
    })
    
}, 10000);

console.log('wait file is reading......')


