const express = require('express')
const router = express.Router()

const Blog = require('../models/Blog')


router.get('/posts',  (req,res) =>{
    
    Blog.find().then(data => {
        res.render('blogs', {data : data})
    })
    
})

router.get('/delete/:id', (req,res) => {  

    const id = req.params.id 
    
    Blog.findByIdAndDelete(id)
    .then(e=>{
        res.redirect('/posts')
    })
})





module.exports=router