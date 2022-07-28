const controller = require("../controllers/conge.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/conge/create", controller.createConge);
  app.get("/api/conge/findall", controller.findallConge);
  app.get("/api/conge/findone/:id", controller.findOne);
  app.put("/api/conge/confirm/:id", controller.confirm);
  app.delete("/api/conge/delete/:id", controller.delete);

};
