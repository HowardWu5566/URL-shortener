const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URLSchema = new Schema({
  originalURL: {
    type: String,
    required: true,
    unique: true,
  },
  shortURL: {
    type: String,
    required: true,
    unique: true,
  },
})

module.exports = mongoose.model('URL', URLSchema)
