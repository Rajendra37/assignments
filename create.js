var fs = require('fs');

fs.mkdirSync('newFolder',function(){})
console.log("Folder is created.....");

setTimeout(() => {
    fs.rmdir('newFolder', function () {
        console.log('folder is deleted...')
    });
}, 10000);
console.log('wait for 10 sec folder is deleting....');
