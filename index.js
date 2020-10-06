const express = require('express')
const helmet = require('helmet')

const server = express();

server.use(helmet())
server.use(express.json())

server.get('/', (req,res)=> {
    res.status(200).json({hello: "working"})
})

server.listen(4000, ()=> console.log('api running'))