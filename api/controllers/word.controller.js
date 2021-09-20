const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

exports.definition = asyncHandler(async (req,res,next) => {
    console.log("api is working...")

    const _b = req.body

    if(!_b.word) return next(
        new ErrorResponse("Please provide word", 400)
    )

    const result = await axios.get(process.env.DEFINITION_SRC+_b.word)

    //  fs.writeFile('htmlfile.txt', result.data, function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!")
    // })

    const $ = cheerio.load(result.data)

    res.status(200).json({ 
        success: true, 
        data: $('.ddef_d').text() || ''
    })
})

exports.synonym = asyncHandler(async (req,res,next) => {
    const _b = req.body

    if(!_b.word) return next(
        new ErrorHandler('Please provide a word', 400)
    )

    let { data } = await axios.get(process.env.SYNONYMS_SRC+_b.word+'?limit=6')
    
    data = (data.data || []).map(i => i.targetTerm)

    res.status(200).json({ success: true, data })
})

exports.sentence = asyncHandler(async (req,res,next) => {
    const _b = req.body 

    if(!_b.word) return next(
        new ErrorHandler('Please provide a word', 400)
    )

    let { data } = await axios.get("https://sentence.yourdictionary.com/"+_b.word)

    const $ = cheerio.load(data)
    let sentense = []
    $('.sentence-item')
    .each((i, el) => sentense.push($(el).text()))

    sentense = (sentense || []).sort((a,b) => a.length - b.length).map(i => i.trim()).slice(0, 10)

    res.status(200).json({ 
        success: true, 
        data: sentense
    })
})