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

function getIngredients(db = connection){
    return db('ingredients').select()
}

function getIngredientsById(ingredientID, db = connection){
    return db('ingredients').where('id',ingredientID).select()
}

function addIngredient(ingredient, db = connection){
    return db('ingredients').insert(ingredient)
        .then(ids => ids[0])
}

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    getRecipeById,
    getIngredients,
    getIngredientsById,
    addIngredient
}