const mongoose = require("mongoose");

const Conge = mongoose.model(
  "Conge",
  new mongoose.Schema({
    dateDebut: Date,
    dateFin: Date,
    id_user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    etat : Boolean
  })
);

module.exports = Conge;