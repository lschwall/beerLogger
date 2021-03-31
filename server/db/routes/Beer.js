const { Beer } = require('../models/index')
const { Router } = require('express');
const bRouter = Router();

bRouter.get('/', (req, res) => {
    res.send('SUCCESS GET')
})
bRouter.post('/', (req, res) => {
    res.send('SUCCESS POST')
})
bRouter.put('/', (req, res) => {
    res.send('SUCCESS PUT')
})
bRouter.delete('/', (req, res) => {
    res.send('SUCCESS DELETE')
})

module.exports = {
    bRouter
}