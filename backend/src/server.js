const express = require('express')
const server = express()
const cors = require('cors');

const config = require('./config');
const port = process.env.PORT

server.use(cors(config.application.cors.server))

server.use(express.json())
server.use(express.urlencoded({extended: false}))

//routes
server.use(require('./routes'))

server.listen(port);
console.log('application listen on port '+ port)