const Pool = require('pg').Pool
const config = require('./config/winston')
const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database: 'todolist',
    password: 'root',
    port: 5432,
})
console.log(config);


const getMemos = (request, response)=>{
  pool.query('SELECT * FROM memo', (error, result)=>{
    if(error){
      config.logger.error(`method: get, status: 404, function: getMemos `)
      throw error
    }
    response.status(200).json(result.rows)  
    })
}

const createMemo = (request, response) => {
    const { id, text, color} = request.body
  
    pool.query('INSERT INTO memo (id, text, color) VALUES ($1, $2, $3)', [id, text, color], (error, results) => {
      if (error) {
        config.logger.error(`method: post, status: 404, function: createMemo `)
        throw error
      }
      response.status(201).send(`create memo ${results.insertId}`)
    })
  }

  const deleteMemo = (request, response) => {
    const id = request.params.id
  console.log(id);
  
    pool.query('DELETE FROM memo WHERE id = $1', [id], (error, results) => {
      if (error) {
        config.logger.error(`method: delete, status: 404, function: deleteMemo `)
        throw error
      }
      response.status(200).send(`memo deleted: ${id}`)
    })
  }

  const updateMemo = (request, response) => {
    const id = request.params.id
    const { text, color } = request.body
  
    pool.query(
      'UPDATE memo SET text = $1, color = $2 WHERE id = $3',
      [text, color, id],
      (error, results) => {
        if (error) {
          config.logger.error(`method: patch, status: 404, function: updateMemos `)
          throw error
        }
        response.status(200).send(`memo modified with ID: ${id}`)
      }
    )
  }

module.exports={
    getMemos,
    createMemo,
    deleteMemo,
    updateMemo,
}