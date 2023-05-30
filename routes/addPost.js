const express = require('express')
const router = express.Router()
const path = require('path')
const dbConnection = require('../models/connection')
const bodyParser = require('body-parser');     

//* veriler pars edilebilir.
router.use(bodyParser.urlencoded({extended:false}));  

//* veritabanı bağlantısı
dbConnection()

router.get('/addPosts',  (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/addpost.html'))
})

router.post('/takePost', (req,res) => {
    console.log(req.body.postTitle)
    console.log(req.body.postContent)
    res.redirect('/')
})



module.exports=router