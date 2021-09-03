const router = require('express').Router()
const { definition } = require('../controllers/word.controller')

router.post('/definition', definition)

module.exports = router