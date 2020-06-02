var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/User", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/Date", function(req, res) {
    db.Date.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/User", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/Date", function(req, res) {
    //console.log(req.body);
    db.Date.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //Check database for login
  app.post("/api/login", function(req, res) {
    db.User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(dbUser) {
      //console.log(dbUser);
      res.json(dbUser);
    });
  });

  //retrieve user information and tasks of the user
  app.post("/api/Dates", function(req, res) {
    db.User.findOne({
      include: [db.Date],
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      //console.log(dbUser);
      res.json(dbUser);
    });
  });

  app.post("/api/register", function(req, res) {
    //console.log(req.body);
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an example by id
  app.delete("/api/delete/:id", function(req, res) {
    console.log("deleted maybe");
    db.Date.destroy({ where: { taskID: req.params.id } }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};