/**
 * This is original map functiosn it is like foreach but in foreach we canonly
 * itrate the arry cannot return values for that perpose we can use map function of an arra
 * map does not change the oroginal array
 *  
 * if nothig is returned in funtion then it store undefined in the result and it will 
 * return undefine
 * 
 * 
 */

// this is original map function...

// const sample = [1,2,3];
// const mapResult = sample.map(function(val, index, array) {
//     console.log('val :', val);    // it will return all valus of arra
//     // console.log('index:',index);  // it will return all index of array
//     // console.log('array:',array);  // it will return whole array
//     return (val);
   
// });


//  now here i will create my own map function it will perform same..

/** 
 * to use myMap with Array.myMap we have added prototype here
 * map is called with function with three arguments that'why we have used function
 * 
 * this keyword indicats to orignal array where you want to perform the map function
 * 
 * resultArray store the output
 * 
 * 
 * 
*/


Array.prototype.myMap = function(callback){

    const resultArray=[]
    for(index=0;index<this.length;index++)
    {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;

}

const sample = [1,2,3];
const mapResult = sample.myMap(function(val, index, array) {
     console.log('val :', val);    // it will return all valus of arra
    // console.log('index:',index);  // it will return all index of array
    // console.log('array:',array);  // it will return whole array
    return (val);
 
});