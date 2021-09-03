const router = require('express').Router()
const { searchWord } = require('../controllers/auto.controller')

router.get('/word', searchWord)

module.exports = router