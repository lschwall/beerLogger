const { Recipe } = require('../models/index')
const { Router } = require('express');
const recipeRouter = Router();

recipeRouter.get('/', (req, res) => {
    res.send('SUCCESS GET')
})
recipeRouter.post('/', (req, res) => {
    res.send('SUCCESS POST')
})
recipeRouter.put('/', (req, res) => {
    res.send('SUCCESS PUT')
})
recipeRouter.delete('/', (req, res) => {
    res.send('SUCCESS DELETE')
})

module.exports = {
    recipeRouter
}