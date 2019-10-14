const mongoose = require('mongoose')

const url = 'mongodb://172.17.0.2:27017/jwt'

const connectDb = async cb => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    cb(true)
  } catch (err) {
    cb(false)
  }
}

module.exports = { connectDb }
