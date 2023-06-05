const express = require('express')
const router = express.Router()

//* controllers import
const adminBlog = require('../controllers/adminBlog')

//* controllers function import 
router.get('/posts', adminBlog.renderBlogs)       //* render blogs page 
router.get('/addPosts',adminBlog.renderAddBlog)   //* render addBlog page

router.post('/takePost', adminBlog.saveBlogPost)  //* save blog 
router.get('/delete/:id', adminBlog.deleteBlog)   //* delete blog

module.exports=router