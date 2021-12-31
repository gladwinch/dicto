const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, 'Please add a word']
    },
    synonyms: [String],
    definition: String,
    sentence: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Word', WordSchema)