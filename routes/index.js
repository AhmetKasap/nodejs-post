const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')

router.get('/',  (req,res) =>{
    const blog = new Blog()
    Blog.find().then(data => {
        res.render('index', {data : data})
    })
})


module.exports=router