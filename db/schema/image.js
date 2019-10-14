const mongoose = require('mongoose')

const image = new mongoose.Schema({
  image: Buffer,
  name: String
})

module.exports = mongoose.model('image', image)
