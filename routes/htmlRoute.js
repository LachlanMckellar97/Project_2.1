var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //console.log("huh?");
    res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
  });

  app.get("/calendar", function(req, res) {
    console.log("yay");
    res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
  });

  app.get("/register", function(req, res) {
    //console.log("yay");
    res.sendFile(path.join(__dirname, "../views/layouts/register.html"));
  });

};