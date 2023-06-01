const express = require('express');
const app = express();
const bodyParser = require('body-parser');   



//* veriler pars edilebilir.
app.use(bodyParser.urlencoded({extended:false}));  

//* mongodb connection
const dbConnection = require('./models/connection')
dbConnection()

//* view engine ejs

app.set ('view engine', 'ejs')


//* public - static
app.use(express.static('public'));

//* routes
const index = require('./routes/index')
const addPost = require('./routes/addBlog')
const posts = require('./routes/blogs')

app.use(index)
app.use(addPost)
app.use(posts)


app.listen(3000);


