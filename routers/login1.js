const mysql=require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userdb',
    password: 'userdb',
    database: 'userdb'
})
const express=require('express')
const route=express.Router()
const db= require('../db')
const path=require('path')

route.post('/',function(req,res,next){
    var uname=req.body.uname;
    var pwd=req.body.pwd;
    connection.query(`SELECT * from users where uname=? and pwd=?`,[uname,pwd],
    function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"error occured"
            })
        }
         if(results.length>0){
                if(results[0].pwd==pwd)
                {
                    res.sendFile(path.join(__dirname + '/User_profile.html'))
                }
            }
        else
        {
            res.send(`<!DOCTYPE html>
        <html>
        <head>
            <title>NOT FOUND</title>
            </head>
        <body>
         <h1>USERNAME OR PASSWORD DOES NOT MATCH</h1>
         </body>
         </html>`)
        }
    } 
    )
})
exports = module.exports = route