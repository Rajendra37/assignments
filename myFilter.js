/**
 * what is filter
 * filter is method of array with the help of we can perform certain oprations with the conditions
 * it is like map but in return we can give some conditions
 * 
 * 
 */

// Array=[4,5,6,7,8,9]
// let result=Array.filter((x)=>{

// return x<5;

// })

// console.log(result);



// here i have created my filter function
Array.prototype.myFilter= function(callback){

    const resultArray=[];
    for(index=0;index<this.length;index++)
    {
        if(callback(this[index],index,this))
        {
            resultArray.push(this[index])
        }
    }
    return resultArray;
}

// acessing the my filter function..
Array=[4,5,6,7,8,9]
   let result=Array.myFilter((x)=>{

     return x<5;

     })

console.log(result);



