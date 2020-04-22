const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecipes(db = connection){
    return db('recipes').select()
}

function addRecipe(recipe, db = connection){
    return db('recipes').insert(recipe)
        .then(ids => ids)
}

module.exports = {
    getRecipes,
    addRecipe
}