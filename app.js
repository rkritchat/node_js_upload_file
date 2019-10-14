const express = require('express')
const app = express()
const imageService = require('./db/service/imageService')
const bodyParser = require('body-parser')
const dbConfig = require('./common/db')
const multer = require('multer')
const upload = multer({})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
dbConfig.connectDb(isSuccess => {
  if (isSuccess) {
    app.listen(50000)
  } else {
    console.log('cannot connect db')
    process.exit(1)
  }
})

app.post('/upload/image', upload.single('photo'), (req, res) => {
  //receive photo and name in type form-data
  const encoded = req.file.buffer.toString('base64')
  imageService.save(encoded, req.body.name)
  res.send('worked')
})

app.get('/find/:name', async (req, res) => {
  //return blob
  const result = await imageService.findByName(req.params.name)
  res.json(result.image)
})
