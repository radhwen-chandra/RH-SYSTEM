const db = require("../models");
const Tache = db.tache;



exports.create = (req, res) => {
  const tache = new Tache({
    nomprojet: req.body.nomprojet,
    tache_estimer: req.body.tache_estimer,
    etat: false,
    id_user:req.body.id_user
  });

  tache.save((err, tache) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "tache was registered successfully!" });
  });
};
//findalltaches
exports.findall = (req, res) => {
    Tache.find()
    .populate({path:"id_user",select:["username"]})
    .exec((err, tache) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(tache);
    })
  };

//findOne tache
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tache.findById(id)
    .populate({path:"id_user",select:["username"]})
    .exec((err, tache) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(tache);
    })
  };

//confirm tache
exports.confirm = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
  
    Tache.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot Tache Tache with id=${id}. Maybe Tache was not found!`
          });
        } else res.send({ message: "Tache was confirmed successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error conferming Tache with id=" + id
        });
      });
  };

  //delete Tache

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tache.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tache was not found!`
          });
        } else {
          res.send({
            message: "Tache was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tache with id=" + id
        });
      });
  };
  