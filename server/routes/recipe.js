const express = require('express')
const router = express.Router()
const {getRecipes} = require('../db/db')

router.get('/', (req,res) =>{
    getRecipes()
        .then(recipes =>{
            res.json(recipes)
        })
})

module.exports = router