const orm = require("../config/orm");

//import burger model
const burger = require("../models/burger");

const path = require("path");

let burgers = [];
//HTML routing
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  //Routes
  //view all burgers
  app.get("api/burgers", function(req, res) {
    orm.selectAll("burgers").then(function(data, err) {
      if (err) throw err;
      console.log(data);
      res.render("index", {
        burger: data
      });
    });
  });
};

//add a new burger
app.post("/api/new"),
  function(req, res) {
    //burgers = orm.selectAll("burgers");
    //let burger = req.body;
    orm
      .insertOne("burgers", "burger_name", req.body.name)
      .then(function(data, err) {
        if (err) throw err;
        console.log(data);
        res.json(data);
      });
  };

//update a burger
app.put("/api/new", function(req, res) {
  orm
    .updateOne("burgers", "devoured", "1", "burger_name", req.body.name)
    .then(function(data, err) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
});

//`UPDATE ?? SET ?? = "??" WHERE ?? = "??"`
