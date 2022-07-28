const db = require("../models");
const Conge = db.conge;



exports.createConge = (req, res) => {
  const conge = new Conge({
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    id_user: req.body.id_user,
    etat: false
  });

  conge.save((err, conge) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Conge was registered successfully!" });
  });
};
//findallconge
exports.findallConge = (req, res) => {
    Conge.find()
    .populate({path:"id_user",select:["username","_id"]})
    .exec((err, conge) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(conge);
    })
  };

//findOne conge
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Conge.findById(id)
    .populate({path:"id_user",select:["username"]})
    .exec((err, conge) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(conge);
    })
  };

//confirm conge
exports.confirm = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
  
    Conge.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot confirm Conge with id=${id}. Maybe Conge was not found!`
          });
        } else res.send({ message: "Conge was confirmed successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error conferming Conge with id=" + id
        });
      });
  };

  //delete conge

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Conge.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Conge was not found!`
          });
        } else {
          res.send({
            message: "Conge was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Conge with id=" + id
        });
      });
  };
  