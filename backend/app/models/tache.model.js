const mongoose = require("mongoose");

const Tache = mongoose.model(
  "Tache",
  new mongoose.Schema({
    nomprojet: String,
    tache_estimer: Date,
    tache_confirmer: Date,
    etat: Boolean,
    id_user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  })
);

module.exports = Tache;


