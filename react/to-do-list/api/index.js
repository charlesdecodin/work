const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const app = express()
const port = 4000
const db = require ('./query')


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Todolist API",
      description: "Todolist API information",
      contact: {
        name:"charles decodin"
      },
      servers: ["http://localhost:4000"]
    }
  },
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  )
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
app.get ('/', (req, res)=>{
  res.json({info:'API basic todolist'})
})

/**
 * @swagger
 * /todos:
 *  get:
 *    description: use to get all users
 *    responses:
 *      '200':
 *        description: Succesful response
 */
app.get ('/todos', db.getMemos)
/**
 * @swagger
 * /todos:
 *  post:
 *    description: Use to create user
 *    parameters:
 *      - name: 'memo'
 *        in: 'body'
 *        schema:
 *          type: object 
 *          properties:
 *            id:
 *              type: string
 *            text: 
 *              type: string
 *            color: 
 *              type: string 
 *    responses:
 *      '201':
 *        description: Created memo
 */
app.post('/todos', db.createMemo)
/**
 * @swagger
 * /todos/{id}:
 *  delete:
 *    description: use to delete a memo
 *    parameters:
 *      - name: id 
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *       '200':
 *          description: Succesful response
 */
app.delete('/todos/:id', db.deleteMemo)
/**
 * @swagger
 * /todos/{id}:
 *  patch:
 *    description: Use to create user
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: string
 *      - name: memo
 *        in: body
 *        schema:
 *          type: object
 *          properties:
 *            text: 
 *              type: string
 *            color:
 *              type: string  
 *    responses:
 *      '201':
 *        description: Created memo
 */
app.patch('/todos/:id', db.updateMemo)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

