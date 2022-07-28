const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/findall", controller.findall);
  app.get("/api/user/findone/:id", controller.findOne);
  app.delete("/api/user/delete/:id", controller.deleteUser);
  app.put("/api/user/update/:id", controller.update);

};
