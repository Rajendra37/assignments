const EventEmitter=require('events')
 let event=new EventEmitter()

 
event.on('prime',(num)=>{

    for (counter = 1; counter <= num; counter++) {
        noPrime = false;

        for (div = 2; div <= (counter - 1); div++) {
            if (counter % div === 0) {
                noPrime = true;
            }
        }
        if (noPrime === false) {
            console.log(counter);
        }
    }


})

 event.emit('prime',10)
