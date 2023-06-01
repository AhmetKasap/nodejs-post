const mongoose = require('mongoose')

const postSchema = new mongoose.Schema( {
    title : {type : String, require: true},
    content : {type : String, require: true}
})

const Blog = mongoose.model('BLOG', postSchema) //* post databasde ki tablo ismi
module.exports = Blog
