const ImageSchema = require('../schema/image')

const save = async (image, name) => {
  const result = await new ImageSchema({
    image,
    name
  }).save()
  console.log(result)
}

const findByName = async name => {
  return await ImageSchema.findOne({ name })
}

module.exports = { save, findByName }
