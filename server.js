const express=require('express')
const server=express();
const db=require('./db')
const path=require('path')

server.use(express.json())
server.use(express.urlencoded({extended: true}))


const hello2=require('./routers/signup2')
const hello1=require('./routers/signup1')
const sup1=require('./routers/login1')
const sup2=require('./routers/login2')

server.use('/signup1',hello1)
server.use('/signup2',hello2)
server.use('/login1',sup1)
server.use('/login2',sup2)

server.get('/project_height_weight.html',function(req,res){
    res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/project_height_weight.html')
})
server.get('/project_dietplan.html',function(req,res){  res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/project_dietplan.html')
})
server.get('/project_doctors.html',function(req,res){  res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/project_doctors.html')
})
server.get('/vaccine.html',function(req,res){ res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/vaccine.html')
})
server.get('/diet1.html',function(req,res){
    res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/diet1.html')
})
server.get('/diet2.html',function(req,res){
    res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/diet2.html')
})
server.get('/diet3.html',function(req,res){
    res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project /routers/diet3.html')
})

server.get('/user',function(req,res){
    res.sendFile('C:/Users/Muskaan/Desktop/immunisation_project/routers/User_profile.html')
})

server.listen(8800,()=>console.log('server started'))