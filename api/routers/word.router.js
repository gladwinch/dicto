const router = require('express').Router()
const { search } = require('../controllers/word.controller')

router.get('/search', search)

module.exports = router