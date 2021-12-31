const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Word = require('../models/word.models')
const { getSentence, getDefinition, getSynonyms } = require('../services/word.service')

exports.search = asyncHandler(async (req, res, next) => {
    const _b = req.query 

    if(!_b.word) return next(
        new ErrorResponse('Please provide a word', 400)
    )

    let word = await Word.findOne({ word: _b.word })

    if(!word) {
        const [
            sentence,
            definition,
            synonyms
        ] = await Promise.all([
            getSentence(_b.word),
            getDefinition(_b.word),
            getSynonyms(_b.word)
        ])

        word = await Word.create({
            word: _b.word,
            sentence,
            definition,
            synonyms
        })
    }

    res.status(200).json({ success: true, data: word })
})