const connection = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function(table, column, value, cb) {
    const queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, column, value], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  updateOne: function(table, column, value, condition, cb) {
    const queryString = "UPDATE ?? SET ??=? WHERE id=?;";
    connection.query(queryString, [table, column, value, condition], function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  }
};

module.exports = orm;