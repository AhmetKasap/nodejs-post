const express = require('express');
const app = express();




const path = require('path')
app.use(express.static('public'));

//routes
const index = require('./routes/index')
const addPost = require('./routes/addPost')
const posts = require('./routes/posts')


app.use(index)
app.use(addPost)
app.use(posts)


app.listen(3000);


