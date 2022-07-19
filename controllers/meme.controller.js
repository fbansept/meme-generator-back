const Meme = require('../models/meme.model.js');

exports.create = (requete,resultat) => {

    const meme = new Meme({
        nom : requete.body.nom,
        description : requete.body.description,
        image_url : requete.body.image_url
    })

    meme.save()
        .then((donnees) => resultat.status(201).send(donnees))
        .catch(erreur => resultat.status(500).send({message : erreur.message}))

}

exports.findAll = (requete,resultat) => {
    Meme.find()
        .then(listeMeme => resultat.send(listeMeme))
        .catch(erreur => resultat.status(500).send({message : erreur.message}))
}

