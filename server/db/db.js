const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecipes(db = connection){
    return db('recipes').select()
}

function getRecipeById(recipeID, db=connection){
    return db('recipes').where('id', recipeID).select()
}

function addRecipe(recipe, db = connection){
    return db('recipes').insert(recipe)
        .then(ids => ids[0])
}

function deleteRecipe(recipeID, db = connection){
    return db('recipes').where('id', recipeID).del()
}

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    getRecipeById
}