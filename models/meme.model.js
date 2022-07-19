const mongoose = require('mongoose')

const MemeSchema = new mongoose.Schema(
  {
    nom: String,
    description: String,
    image_url: String,
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Meme', MemeSchema)
