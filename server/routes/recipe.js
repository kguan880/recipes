const express = require('express')
const router = express.Router()
const {getRecipes,getRecipeById, addRecipe, deleteRecipe} = require('../db/db')

router.get('/', (req,res) =>{
    getRecipes()
        .then(recipes =>{
            res.json(recipes)
        })
})

router.get('/:id', (req,res) =>{
    const id = req.params.id
    getRecipeById(id)
        .then(id =>{
            res.json(id)
        })
})

router.post('/', (req,res) =>{
    const recipe = req.body
    addRecipe(recipe)
        .then(id => {
            res.json({id :id})
        })
})

router.delete('/:id', (req,res) =>{
    const id = req.params.id

    deleteRecipe(id)
        .then(id =>{
            res.json(id)
        })
})

module.exports = router