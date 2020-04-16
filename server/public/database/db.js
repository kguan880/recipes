const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes,
  saveRecipes
}

function getRecipes(db = connection){
    return db('recipes').select()
}

function saveRecipes(recipe, db = connection){
    return db('recipes').insert({
        id: recipe.id,
        recipe_name: recipe.recipe_name
    })
}