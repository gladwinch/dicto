const router = require('express').Router()
const { definition, synonym, sentence } = require('../controllers/word.controller')

router.post('/definition', definition)
router.post('/synonym', synonym)
router.post('/sentence', sentence)

module.exports = router