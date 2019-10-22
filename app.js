var express = require('express')
var app = express()
var {LoginRoute} = require('./routes/login.js')
var {RegisterRoute} = require('./routes/register.js')

app.use('/login',LoginRoute)
app.use('/register',RegisterRoute)

app.use('/logout',(req,res)=>
{
    res.send('Logout')
})

app.get('/',(req,res)=>{
    res.sendfile('main.html')
})

module.exports = {app}