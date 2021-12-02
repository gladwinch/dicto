const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const { getSentence, getDefination, getSynonym } = require('../services/word.service')

exports.search = asyncHandler(async (req,res,next) => {
    const _b = req.body 

    if(!_b.word) return next(
        new ErrorResponse('Please provide a word', 400)
    )

    const [
        sentence,
        defination,
        synonym 
    ] = await Promise.all([
        getSentence(_b.word),
        getDefination(_b.word),
        getSynonym(_b.word)
    ])

    res.status(200).json({
        success: true,
        data: {
            sentence,
            defination,
            synonym
        }
    })
})