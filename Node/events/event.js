/**
 * events is module like fs module
 * eventEmitter is class and after that we have created object of that class
 * event emit means we are calling that evnet
 * and with the help of on we have created our event
 * in node js we can call one event at multiple function
 */



const EventEmitter =require('events');
const event=new EventEmitter();
event.on('sayHello',()=>{
console.log("hello...");
})

event.on('sayHello',()=>{
    console.log("hello Rajendra...");
})

event.emit('sayHello');