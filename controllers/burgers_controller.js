const orm = require("../config/orm");

const express = require("express");
//import burger model
//const burger = require("../models/burger");

const path = require("path");

let burgers = [];
//HTML routing
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //index route loads index.html
  app.get("/", function(req, res) {
    orm.selectAll("burgers", function(data, err) {
      // console.log("x", data);
      // console.log("y", err);
      if (err) throw err;
      res.render("index", {
        burgers: data
      });
    });
  });

  //Routes
  //view all burgers
  app.get("api/", function(req, res) {
    console.log("we hit this route");
    orm.selectAll("burgers", function(data, err) {
      if (err) throw err;
      console.log(data);
      //res.json(data);
    });
  });

  //add a new burger
  app.post("/api", function(req, res) {
    //burgers = orm.selectAll("burgers");
    //let burger = req.body;
    orm.insertOne("burgers", "burger_name", req.body.name, function(data, err) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  //update a burger
  app.put("/api/burgers/:id", function(req, res) {
    orm.updateOne("burgers", "devoured", "1", "id", req.params.id, function(
      data,
      err
    ) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });
};

//`UPDATE ?? SET ?? = "??" WHERE ?? = "??"`
