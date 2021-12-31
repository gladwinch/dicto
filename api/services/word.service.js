const axios = require("axios")
const cheerio = require("cheerio")
const promisifier = require('./promisifier.service')


const getDefinition = promisifier( async (word) => {
    if(!word) return null

    const result = await axios.get(process.env.DEFINITION_SRC+word)
    const $ = cheerio.load(result.data)

    return $('.ddef_d').text() || ''
})

const getSynonyms = promisifier( async (word) => {
    if(!word) return null

    let { data } = await axios.get(process.env.SYNONYMS_SRC+word+'?limit=6')
    
    data = (data.data || []).map(i => i.targetTerm)
    return data
})

const getSentence = promisifier( async (word) => {
    if(!word) return null

    let { data } = await axios.get("https://sentence.yourdictionary.com/"+word)

    const $ = cheerio.load(data)
    let sentense = []
    $('.sentence-item')
    .each((i, el) => sentense.push($(el).text()))

    sentense = (sentense || []).sort((a,b) => a.length - b.length).map(i => i.trim()).slice(0, 10)
    return sentense
})

module.exports = {
    getDefinition,
    getSynonyms,
    getSentence
}