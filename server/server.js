const path = require('path')
const express = require('express')

const server = express()
const recipeRoute = require('./routes/recipe')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/recipes', recipeRoute)

module.exports = server
