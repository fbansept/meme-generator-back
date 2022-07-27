const mongoose = require('mongoose')

const UtilisateurSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    avatar_url: String,
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Utilisateur', UtilisateurSchema)
