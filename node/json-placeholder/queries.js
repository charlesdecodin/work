const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'placeholder',
    password: 'root',
    port: 5432,
})

//Request users
const getUsers = (request, response) => {
  const path = request.query;
  console.log(request.query);
  let username = request.query.username;
  let name = request.query.name;
  
  //Request All users
   if(Object.keys(path).length === 0){
     pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
       if (error) {
         throw error
       }
       response.status(200).json(results.rows)
     })
  //Request user by username
   }else if(username != undefined){
     pool.query(`SELECT * FROM users WHERE username = '${username}'`,(error, results)=>{
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
     })
  //Request user by name
   }else if(name != undefined){
      name = name.replace(/([A-Z])/g, ' $1').trim()
      console.log(name);
     pool.query(`SELECT * FROM users WHERE name = '${name}'`,(error, results)=>{
       if(error){
         throw error
       }
       response.status(200).json(results.rows)
     })
   }
  }
  //Request user by id
  const getUserById = (request, response) => {  
    const id = parseInt(request.params.id)
    
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //Request posts
  const getPosts = (request, response) => {
    let path = request.query
    let title = request.query.title
    let userId = request.query.userid
    console.log(userId)
    //Request all posts
    if(Object.keys(path).length === 0){
      pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
      //Request post by title
    }else if(title != undefined){
      title.replace('+', ' ')
      console.log(title);
      pool.query(`SELECT * FROM posts WHERE title = '${title}' `, (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
      //Request post by userId
    }else if(userId != undefined){
      pool.query(`SELECT * FROM posts WHERE userid = '${userId}' `, (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
  }
  //Request post by id
  const getPostsById = (request, response) => {  
    const id = parseInt(request.params.id)
    
    pool.query(`SELECT * FROM posts WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }

      response.status(200).json(results.rows)
    })
  }
  //Request comments
  const getComments = (request, response) => {
    const path = request.query
    const postId = request.query.postid
    console.log(postId)
    if(Object.keys(path).length === 0){
      pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }else if(postId != undefined){
      pool.query(`SELECT * FROM comments WHERE postid = ${postId}`, (error, results)=>{
        if(error){
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
  }
  //Request comments by id 
  const getCommentsById = (request, response) => {  
    const id = parseInt(request.params.id)
    
    pool.query(`SELECT * FROM comments WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports ={
      getUsers,
      getUserById,
      getPosts,
      getPostsById,
      getComments,
      getCommentsById
  }