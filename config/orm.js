const connection = require("./connection");
let orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableName, colOne, colTwo, valueOne, valueTwo) {
    queryString = `INSERT INTO ?? (??, ??) VALUES ("??", ??)`;
    connection.query(
      queryString,
      [tableName, colOne, colTwo, valueOne, valueTwo],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  updateOne: function(
    tableName,
    colUpdate,
    valueUpdate,
    colTarget,
    valueTarget
  ) {
    queryString = `UPDATE ?? SET ?? = "??" WHERE ?? = "??"`;
    connection.query(
      queryString,
      [tableName, colUpdate, valueUpdate, colTarget, valueTarget],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
