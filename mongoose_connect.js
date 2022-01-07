var express=require('express')
var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/students').then(()=>{
    console.log("Database Connected");
    var app=express()
    app.listen(3000,()=>
    {
        console.log('Server Started');
    })
})