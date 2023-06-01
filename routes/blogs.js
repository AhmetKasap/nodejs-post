const express = require('express')
const router = express.Router()
const path = require('path')

const Blog = require('../models/Blog')


router.get('/posts',  (req,res) =>{
    res.render('blogs')

    const blog = new Blog()
    Blog.find().then(data => {
        
    })
    blog.save()

})





module.exports=router