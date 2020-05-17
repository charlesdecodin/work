const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/posts?postid=1', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
    
  })
app.get('/users', db.getUsers)
app.get('/posts', db.getPosts)
app.get('/comments', db.getComments)
app.get('/users/:id', db.getUserById)
app.get('/posts/:id', db.getPostsById)
app.get('/comments/:id', db.getCommentsById)





app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
})