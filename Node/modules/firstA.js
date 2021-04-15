var counter=function(arr){
    return 'array length is '+arr.length;
}

var sum=function(a,b){
    return`additio is ${a+b}`
}


// this is the first apporach
// module.exports=counter;

// this is second apporoch for modules
module.exports.counter=counter;
module.exports.sum=sum;

// // thsi is the third way for module exports
// module.exports.counter=function(arr){
//     return 'array length is '+arr.length;
// }

// module.exports.sum=function(a,b){
//     return`additio is ${a+b}`
// }