const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000
const db = require('./queries')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "json placeholder API",
            description: "json placeholder API Information",
            contact: {
                name: "charles decodin"
            },
            servers: ["http://localhost:4000"]
        }
    },
    // ['.routes/*.js]
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



//Routes
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

/**
 * @swagger
 * /users:
 *  get:
 *      description: Use to request all users
 *      parameters: 
 *          - name: username
 *            in: query
 *            schema: 
 *              type: string
 *          - name: name
 *            in: query
 *            schema: 
 *              type: string
 *      responses:
 *          '200':
 *              description: A succesful response
 */
app.get('/users', db.getUsers)

/**
 * @swagger
 * /posts:
 *  get:
 *      description: Use to request all posts
 *      parameters: 
 *          - name: title
 *            in: query
 *            schema: 
 *              type: string
 *      responses:
 *          '200':
 *              description: A succesful response
 */
app.get('/posts', db.getPosts)

/**
 * @swagger
 * /comments:
 *  get:
 *      description: Use to request all posts
 *      parameters: 
 *          - name: postid
 *            in: query
 *            schema: 
 *              type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 */
app.get('/comments', db.getComments)

/**
 * @swagger
 * 
 *  /users/{id}:
 *  get:
 *      summary: Get an user by ID
 *      parameters: 
 *          - name: id
 *            in: path        
 *            required: true
 *            schema:
 *               type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 *            
 */
app.get('/users/:id', db.getUserById)

/**
 * @swagger
 * 
 *  /posts/{id}:
 *  get:
 *      summary: Get a posts by ID
 *      parameters: 
 *          - name: id
 *            in: path        
 *            required: true
 *            schema:
 *               type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 *            
 */
app.get('/posts/:id', db.getPostsById)

/**
 * @swagger
 * 
 *  /comments/{id}:
 *  get:
 *      summary: Get a comments by ID
 *      parameters: 
 *          - name: id
 *            in: path        
 *            required: true
 *            schema:
 *               type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 *            
 */
app.get('/comments/:id', db.getCommentsById)





app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})