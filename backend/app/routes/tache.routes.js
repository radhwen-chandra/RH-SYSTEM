const { authJwt } = require("../middlewares");
const controller = require("../controllers/tache.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/tache/create", controller.create);
  app.get("/api/tache/findall", controller.findall);
  app.get("/api/tache/findone/:id", controller.findOne);
  app.put("/api/tache/confirm/:id", controller.confirm);
  app.delete("/api/tache/delete/:id", controller.delete);
};
