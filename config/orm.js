const connection = require("./connection");
let orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
    return result;
  },
  insertOne: function(tableName, colOne, valueOne) {
    queryString = `INSERT INTO ?? (??) VALUES ("??")`;
    connection.query(queryString, [tableName, colOne, valueOne], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
    return result;
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
    return result;
  }
};

module.exports = orm;
