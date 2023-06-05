const Blog = require('../models/Blog')


const renderBlogs = (req,res) =>{
    Blog.find().then(data => {
        res.render('blogs', {data : data})
    })
}

const deleteBlog = (req,res) => {  
    const id = req.params.id 

    Blog.findByIdAndDelete(id)
    .then(e=>{
        res.redirect('/posts')
    })
}

const renderAddBlog = (req,res) =>{
    res.render('addblog')
}

const saveBlogPost = (req,res) => {
    const added_post = new Blog({
        title: req.body.postTitle,
        content: req.body.postContent
    })
    added_post.save()

    res.redirect('/posts')
}




module.exports = {
    renderBlogs, deleteBlog, renderAddBlog, saveBlogPost
}

