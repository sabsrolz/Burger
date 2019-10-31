const connection = require("./connection");
let orm = {
  selectAll: function(tableName, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      cb(result, err);
    });
  },
  insertOne: function(tableName, colOne, valueOne, cb) {
    queryString = `INSERT INTO ?? (??) VALUES ("?")`;
    connection.query(queryString, [tableName, colOne, valueOne], function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result, err);
    });
  },
  updateOne: function(
    tableName,
    colUpdate,
    valueUpdate,
    colTarget,
    valueTarget,
    cb
  ) {
    queryString = `UPDATE ?? SET ?? = "?" WHERE ?? = "?"`;
    connection.query(
      queryString,
      [tableName, colUpdate, valueUpdate, colTarget, valueTarget],
      function(err, result) {
        if (err) throw err;
        cb(result, err);
      }
    );
  }
};

module.exports = orm;
