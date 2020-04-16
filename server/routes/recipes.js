const express = require('express')
const router = express.Router()

const db = require('../database/db')

router.get('/', (req,res) =>{
    db.getRecipes()
        .then(recipes =>{
            res.send(recipes)
        })
        .catch(err => {
            res.status(500).send(err.message)
          })
})

router.post('/', (req, res) =>{
    const recipe = req.body

    db.saveRecipes(recipe)
        .then(recipes =>{
            console.log(recipes, 'recipe added')
        })
        .catch(err => {
            res.status(404).send(err.message)
          })
})

module.exports = router