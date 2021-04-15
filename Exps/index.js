const express=require('express');
const fs = require('fs');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const data=[]

app.get("/",(req,res)=>{
    res.send("welcome to express.")

});
app.get("/data",(req,res)=>{
    res.send(data)
});

app.post("/data",(req,res)=>{
    console.log(req.body);
    const mydata=req.body;
    data.push(mydata);

    // fs.writeFile('db.json',json.pars(data),(err,mydata)=>{
    //         console.log('data is added..');
    // })
    
    
    res.send("data added..")

})

app.delete("/data",(req,res)=>{
    res.send("data is deleted..")
})

app.listen(3000,()=>{
console.log('listening on port 3000');

});