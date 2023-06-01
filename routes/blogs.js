const express = require('express')
const router = express.Router()

const Blog = require('../models/Blog')


router.get('/posts',  (req,res) =>{
    
    const blog = new Blog()
    Blog.find().then(data => {
        res.render('blogs', {data : data})
    })
    
})





module.exports=router