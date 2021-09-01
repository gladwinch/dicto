const axios = require('axios')
const asyncHandler = require('../middleware/async')

exports.searchWord = asyncHandler(async (req, res, next) => {
    const link = "https://dictionary.cambridge.org/autocomplete/amp?dataset=english&q="
    const _b = req.query

    if(!_b.word) {
        return next(
            "Please provide word", 400
        )
    }

    let result = await axios.get(link+_b.word)

    result = result.data.map(i => i.word).slice(0,4)
    
    res.status(200).json({
        success: true, 
        data: result
    })
})