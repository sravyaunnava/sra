const express=require('express')
const app=express();
app.get('/',function(req,res){
    res.send('hello world')
    console.end()
})
app.get('/alien',function(req,res){
    res.send('hello world >>>>>>>>>>>> welcome back')
    console.end()
})
app.listen(9000,function(req,res){
    console.log('running')
})