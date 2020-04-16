const path = require('path')
const express = require('express')

const recipe = require('./routes/recipes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/recipes', recipe)

module.exports = server
