const express = require('express')
const router = express.Router()
const {getRecipes, addRecipe} = require('../db/db')

router.get('/', (req,res) =>{
    getRecipes()
        .then(recipes =>{
            console.log(recipes)
            res.json(recipes)
        })
})

router.post('/', (req,res) =>{
    const recipe = req.body

    addRecipe(recipe)
        .then(recipes => {
            console.log(recipes)
            res.json(recipes)
        })
})

module.exports = router