const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')

router.get('/addPosts',  (req,res) =>{
    res.render('addblog')
})

router.post('/takePost', (req,res) => {
    const added_post = new Blog({
        title: req.body.postTitle,
        content: req.body.postContent
    })
    added_post.save()

    res.redirect('/posts')


})



module.exports=router