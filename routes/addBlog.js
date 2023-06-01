const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');   
const Blog = require('../models/Blog')


//* veriler pars edilebilir.
router.use(bodyParser.urlencoded({extended:false}));  

router.get('/addPosts',  (req,res) =>{
    res.render('addblog')
})

router.post('/takePost', (req,res) => {
    const added_post = new Blog({
        title: req.body.postTitle,
        content: req.body.postContent
    })
    added_post.save()

    res.redirect('/')


})



module.exports=router