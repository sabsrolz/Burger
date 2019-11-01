const orm = require("../config/orm");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(valueOne, cb) {
    orm.insertOne("burgers", "burger_name", valueOne, function(res) {
      cb(res);
    });
  },
  updateOne: function(valueTarget, cb) {
    orm.updateOne("burgers", "devoured", "1", "id", valueTarget, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
