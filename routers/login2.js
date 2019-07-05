const route=require('express').Router()
const path=require('path')
route.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname + '/project_main.html'))
})
exports = module.exports = route
