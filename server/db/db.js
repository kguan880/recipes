const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecipes(db = connection){
    return db('recipes').select()
}

module.exports = {
    getRecipes
}