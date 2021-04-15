/**
 * Register event with callback parameters
 * 
 * 
 */


const EventEmitter=require('events')

const event=new EventEmitter();

event.on('sayMyName',(firstname,lastname)=>{
console.log(`My firstname is ${firstname} and lastname is ${lastname}`);

})

event.emit('sayMyName','Rajendra','Gaikwad')