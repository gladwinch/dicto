const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

exports.definition = asyncHandler(async (req,res,next) => {
    console.log("api is working...")

    const _b = req.body
    const response = { sentenses: [] }

    if(!_b.word) return next(
        new ErrorResponse("Please provide word", 400)
    )

    const result = await axios.get(process.env.DEFINITION_SRC+_b.word)

     fs.writeFile('htmlfile.txt', result.data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!")
    })

    const $ = cheerio.load(result.data)

    response.definition = $('.ddef_d').text()
    $('ul .dexamp').each((i, el) => {
        console.log('i', i)
        response.sentenses.push($(el).text())
    })

    res.status(200).json({ 
        success: true, 
        data: response
    })
})