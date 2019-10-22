var express = require('express')
var router = express.Router()
var bodyparser = require('body-parser')

router.use(express.static(__dirname));
router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())

router.get('/',(req,res)=>
{
    res.sendfile('register.html')
})

router.post('/',(req,res)=>
{
    var data = req.body
    res.send("User "+req.body.name+" Registered !")
    // res.end()
})

module.exports = {RegisterRoute : router}