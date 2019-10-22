var express = require('express')
var router = express.Router()
var bodyparser = require('body-parser')

router.use(express.static(__dirname));
router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())

router.get('/',(req,res)=>
{
    res.sendfile('login.html')
})

router.post('/',(req,res)=>
{
    var name = req.body.name
    var pass = req.body.password
    // console.log(name,pass)
    res.send("Welcome "+name+" to the API")
})

module.exports = {LoginRoute : router}
