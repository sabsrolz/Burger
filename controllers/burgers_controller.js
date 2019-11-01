const orm = require("../config/orm");

const express = require("express");
//import burger model
const burger = require("../models/burger");

const path = require("path");

let burgers_available = [];
let burgers_devoured = [];
//HTML routing
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //index route loads index.html
  app.get("/", function(req, res) {
    burgers_available = [];
    burgers_devoured = [];
    burger.selectAll(function(data, err) {
      //console.log(data);
      if (err) throw err;
      for (let burger_row = 0; burger_row < data.length; burger_row++) {
        if (data[burger_row].devoured == 0) {
          burgers_available.push(data[burger_row]);
        } else {
          burgers_devoured.push(data[burger_row]);
        }
      }
      console.log(burgers_available);
      console.log(burgers_devoured);
      res.render("index", {
        burgers_0: burgers_available,
        burgers_1: burgers_devoured
      });
    });
  });

  //Routes
  //view all burgers
  // app.get("api/", function(req, res) {
  //   console.log("we hit this route");
  //   orm.selectAll("burgers", function(data, err) {
  //     if (err) throw err;
  //     console.log(data);
  //     //res.json(data);
  //   });
  // });

  //add a new burger
  app.post("/api", function(req, res) {
    //burgers = orm.selectAll("burgers");
    //let burger = req.body;
    burger.insertOne(req.body.name, function(data, err) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  //update a burger
  app.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(data, err) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });
};

//`UPDATE ?? SET ?? = "??" WHERE ?? = "??"`
