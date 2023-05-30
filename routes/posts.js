const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/posts',  (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/posts.html'))
})



module.exports=router