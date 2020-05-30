var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/dates", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Date.findAll({
      where: query
    }).then(function(dbDate) {
      res.json(dbDate);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/dates/:id", function(req, res) {
    db.Date.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbDate) {
      console.log(dbDate);
      res.json(dbDate);
    });
  });

  // POST route for saving a new post
  app.post("/api/dates", function(req, res) {
    db.Date.create(req.body).then(function(dbDate) {
      res.json(dbDate);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/dates/:id", function(req, res) {
    db.Date.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDate) {
      res.json(dbDate);
    });
  });

  // PUT route for updating posts
  app.put("/api/dates", function(req, res) {
    db.Date.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbDate) {
      res.json(dbDate);
    });
  });
};