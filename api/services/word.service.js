const axois = require("axios")
const $ = require("cheerio")
const promisifier = require('./promisifier.service')


const definationPromise = promisifier( async (word) => {
    if(!word) return null

    const result = await axios.get(process.env.DEFINITION_SRC+_b.word)
    const $ = cheerio.load(result.data)

    return $('.ddef_d').text() || ''
})

const synonymPromise = promisifier( async (word) => {
    if(!word) return null

    let { data } = await axios.get(process.env.SYNONYMS_SRC+_b.word+'?limit=6')
    
    data = (data.data || []).map(i => i.targetTerm)
    return data
})

const sentencePromise = promisifier( async (word) => {
    if(!word) return null

    let { data } = await axios.get("https://sentence.yourdictionary.com/"+_b.word)

    const $ = cheerio.load(data)
    let sentense = []
    $('.sentence-item')
    .each((i, el) => sentense.push($(el).text()))

    sentense = (sentense || []).sort((a,b) => a.length - b.length).map(i => i.trim()).slice(0, 10)
    return sentense
})

module.export = {
    definationPromise,
    synonymPromise,
    sentencePromise
}